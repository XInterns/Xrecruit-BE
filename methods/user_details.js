const config= require('../config.json');
const _userdetails=(req,res)=>{
    const cone=req.app.get('sql-connection');
    if(req.body.email==undefined){
        var result={
            "message":"0"
        }
        res.send(result);
    }
    else
    {
    var email=req.body.email
    var name=req.body.name
    var contact=req.body.contact
    var address=req.body.address
    var college=req.body.college
    var percentage=req.body.percentage
    cone.query(`insert into ${config.User_Details} values("${email}","${name}","${contact}","${address}","${college}","${percentage}");`,function(err,result){
        if(err){
            var result={
                "message":"0"
            }
            res.send(result); 
        }
        else 
        {
            var result={
                "message":"1"
            }
            res.send(result);  
        }
        });
    
    }
}

module.exports=_userdetails;