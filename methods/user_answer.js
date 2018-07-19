const config= require('../config.json');
const _useranswer=(req,res)=>{
    const cone=req.app.get('sql-connection');

    var email=req.body.email;
    var qid=req.body.qid;
    var user_answer=req.body.answer;
        cone.query(`update ${config.Test} set user_answers="${user_answer}" where qid="${qid}" and email="${email}";`,function(err,result){
            if(err)
            console.log(err);
            
        })
    
    var result={
        "message":"1"
    }
    res.send(result);


}

module.exports=_useranswer;