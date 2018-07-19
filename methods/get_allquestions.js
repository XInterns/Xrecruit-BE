const config= require('../config.json');
const _showquestions=(req,res)=>{
    const cone=req.app.get('sql-connection');
    var question=req.params.question;
    var qtype=req.params.qtype;
    var sql=null;
    if(question==="null" && qtype==="null"){
        sql=`select * from ${config.Questions};`
    }
    else if(question!=="null" && qtype!=="null"){
        sql=`select * from ${config.Questions} where question like "%${question}%" and qtype="${qtype}" `
    }
    else{
        sql=`select * from ${config.Questions} where question like "%${question}%" or qtype="${qtype}" `
    }

    cone.query(sql,function(err,result){
        if(err)
            console.log(err);
        else{
            res.send(result);
        }

    })

}
module.exports=_showquestions;
