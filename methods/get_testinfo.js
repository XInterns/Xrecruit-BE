const _testinfo=(req,res)=>{
    const cone=req.app.get('sql-connection');

    var email=req.params.email;
    cone.query(`select * from test where email="${email}"`,function(err,result){
            if(err)
            console.log(err);
        res.send(result);

})
}
module.exports=_testinfo;