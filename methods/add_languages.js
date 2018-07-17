const _addlang=(req,res)=>{
    const cone=req.app.get('sql-connection');
    var lang_name=req.body.lang_name ;
    
    cone.query(`insert into languages values("${lang_name}");`,function(err,result){
        if(err)
        console.log(err);
    var result={
        "message":"1"
    }
        res.send(result);
    })

}
module.exports=_addlang;
