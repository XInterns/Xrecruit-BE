
const _evaluatetext=(req,res)=>{
    const cone=req.app.get('sql-connection');

    var email=req.body.email;
    var qid=req.body.qid;
    var check=req.body.check;
    cone.query(`update test set eval="${check.toUpperCase()}" where  qid=${qid} and email="${email}";`,function(err,result){
            if(err)
            console.log(err);
            
    })

    var result={
        "message":"1"
    }
    res.send(result);


}

module.exports=_evaluatetext;