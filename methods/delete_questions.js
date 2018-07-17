
const _deletequestion=(req,res)=>{
    const cone=req.app.get('sql-connection');
    var qid=req.body.qid;
    cone.query(`delete from questions where qid=${qid}`,function(err,result){
        if(err)
        console.log(err);
    var result={
        "message":"1"
    }
        res.send(result);
    })

}
module.exports=_deletequestion;
