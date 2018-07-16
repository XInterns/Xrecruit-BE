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
    cone.query(`select password from user_login where email="${username}"`,function(err,result){
            if(err)
            {
                console.log("no")
            }
            else 
            {
                if(result.length==0)
                {
                    var okay={
                        "message":"0"
                    }
                    res.send(okay);
                }
                else
                if(result[0].password==password){
                    cone.query(`select * from test where email="${username}"`,function(err,result){
                        if(err)
                        console.log(err);
                        else{
                            result.push({"message":"1"});
                            res.send(result);
                            
                        }
                    })
                    cone.query(`update test set status="-1" where email="${username}"`,function(err,result){
                        if(err)
                        console.log(err); 
                    })
                }
                else{
                    var okay={
                        "message":"0"
                    }
                    res.send(okay);
                }
                
                
            }
        });
    
    }
}

module.exports=_userlogin;