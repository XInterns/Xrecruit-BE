const config= require('../config.json');
const _userlogin=(req,res)=>{
    const cone=req.app.get('sql-connection');
        if(req.body.username==undefined){
        var result={
            "message":"0"
        }
        res.send(result);
    }
    else
    {
    var username=req.body.username;
    var password=req.body.password;
    cone.query(`select password from ${config.User_Login} where email="${username}"`,function(err,result){
            if(err)
            {
                console.log("no")
            }
            else 
            {
                if(result.length==0)
                {
                    var okay=[{
                        "message":"0"
                    }]
                    res.send(okay);
                }
                else
                if(result[0].password==password){
                    cone.query(`select * from ${config.Test} where email="${username}"`,function(err,result){
                        if(err)
                        console.log(err);
                        else{
                            results=[];
                            results.push({"message":"1"});
                            results.push(result)
                            res.send(results);
                            
                        }
                    })
                    cone.query(`update ${config.Test} set status="-1" where email="${username}"`,function(err,result){
                        if(err)
                        console.log(err); 
                    })
                }
                else{
                    var okay=[{
                        "message":"0"
                    }]
                    res.send(okay);
                }
                
                
            }
        });
    
    }
}

module.exports=_userlogin;