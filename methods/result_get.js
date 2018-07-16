
const _resultget=(req,res)=>{
    const cone=req.app.get('sql-connection');
    var email=req.params.email;
    var ttype=req.params.type;
    var sql=null;
    if(email==="null" && ttype==="null"){
        sql=`select DISTINCT email,ttype from test;`
    }
    else if(email!=="null" && ttype!=="null"){
        sql=`select DISTINCT email,ttype from test where email like "%${email}%" and ttype="${ttype}" `
    }
    else{
        sql=`select DISTINCT email,ttype from test where email like "%${email}%" or ttype="${ttype}" `
    }

    cone.query(sql,function(err,result){
        if(err)
            console.log(err);
        else{
            res.send(result);
        }

    })
}

module.exports=_resultget;