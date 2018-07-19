const _evaluateMCSC=require('./evaluate_MC_SC');
const config= require('../config.json');
const _updatetime=(req,res)=>{
    const cone=req.app.get('sql-connection');

    var email=req.body.email;
    var duration=parseInt(req.body.duration);
    cone.query(`update ${config.Test} set duration="${duration}" where  email="${email}";`,function(err,result){
            if(err)
            console.log(err);
            
    })

    if(duration<=0)
    {
        cone.query(`update ${config.Test} set status="1" where  email="${email}";`,function(err,result){
            if(err)
            console.log(err);
            
    })
        cone.query(`delete from ${config.User_Login} where email="${email}"`,function(err,result){
        if(err)
        console.log(err);
        
    })
    
    _evaluateMCSC(req,email);

    }
    
    var result={
        "message":"1"
    }
    res.send(result);


}

module.exports=_updatetime;