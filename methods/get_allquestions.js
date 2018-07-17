const _showquestions=(req,res)=>{
    const cone=req.app.get('sql-connection');
    cone.query(`select * from questions`,function(err,result){
        if(err)
        console.log(err);
    var result={
        "message":"1"
    }
        res.send(result);
    })

}
module.exports=_showquestions;
