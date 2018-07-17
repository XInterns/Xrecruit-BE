const _adminlogin=(req,res)=>{
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
    cone.query(`select password from admin_login where username="${username}"`,function(err,result){
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
                    var okay={
                        "message":"1"
                    }
                    res.send(okay);
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

module.exports=_adminlogin;