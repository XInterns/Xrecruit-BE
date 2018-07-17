const _evaluateMCSC=require('./evaluate_MC_SC');

const _updatetime=(req,res)=>{
    const cone=req.app.get('sql-connection');

    var email=req.body.email;
    var duration=req.body.duration;
    cone.query(`update test set duration="${duration}" where  email="${email}";`,function(err,result){
            if(err)
            console.log(err);
            
    })

    if(duration=="0")
    {
        cone.query(`update test set status="1" where  email="${email}";`,function(err,result){
            if(err)
            console.log(err);
            
    })
        cone.query(`delete from user_login where email="${email}"`,function(err,result){
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