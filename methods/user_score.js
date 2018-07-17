
const _score =(req,res)=>{
    const cone=req.app.get('sql-connection');

    var email=req.params.email;
    cone.query(`select status,eval from test where email="${email}"`,function(err,result){
            if(err)
            console.log(err);
        var flag=0;
        var correct=0;
        for(var i=0;i<result.length;i++)
        {
            
            if(result[i].eval=="CORRECT")
            {
                correct++;
            }
            if(result[i].eval=="pending")
            {
                flag=1;
            }
        }
        
        if(flag==0)
        {
            var status={"eval_status":`The score is ${correct}/${result.length}`}
            res.send(status);
        } 
        else
        {
            if(result[0].status=="0")
            {
                var status={"eval_status":"Test Not Started"};
                res.send(status);
            }
            
            else if(result[0].status=="-1")
            {
                var status={"eval_status":"Test in Process or Incomplete"}
                res.send(status);
            }
            else if(result[0].status=="1")
            {
                var status={"eval_status":"Test Yet to be Evaluted"}
                res.send(status);
            }
            
        }
    })
}
module.exports=_score;