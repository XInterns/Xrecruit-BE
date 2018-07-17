const _question=(req,res)=>{
    const cone=req.app.get('sql-connection');
    var query=req.body;
    if(query.length>0){
    for(var i=0;i<query.length;i++)
    {
       
        var qtype=query[i].qtype;
        var question=query[i].question;
        var options=query[i].options;
        var answers=query[i].answers;
        var difficulty=query[i].difficulty;
        
        
        cone.query(`insert into questions(qtype,question,options,answers,difficulty) values("${qtype}","${question}","${options}","${answers}","${difficulty}");`,function(err,result){
            if(err)
            console.log(err);
            
        })
    }
    var result={
        "message":"1"
    }
    res.send(result);
}
else{
    var result={
        "message":"0"
    }
    res.send(result);
}
}

module.exports=_question;