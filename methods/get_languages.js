const _getlang=(req,res)=>{
    const cone=req.app.get('sql-connection');
    var lang_name=req.params.lang;
    cone.query(`select * from languages where lang_name like "${lang_name}%" `,function(err,result){
        if(err)
        console.log(err);

        res.send(result);
    })

}
module.exports=_getlang;
