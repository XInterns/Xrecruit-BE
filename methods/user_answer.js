const _useranswer=(req,res)=>{
    const cone=req.app.get('sql-connection');

    var email=req.body.email;
    var qid=req.body.qid;
    var user_answer=req.body.answer;
    console.log("email"+email+"qid"+qid+"useranswer"+user_answer)
        cone.query(`update test set user_answers="${user_answer}" where qid="${qid}" and email="${email}";`,function(err,result){
            if(err)
            console.log(err);
            
        })
    
    var result={
        "message":"1"
    }
    res.send(result);


}

module.exports=_useranswer;