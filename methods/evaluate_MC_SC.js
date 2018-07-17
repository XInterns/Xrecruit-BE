const express=require("express");
const app=express();
const _evaluateMCSC=(req,email)=>{
    const cone=req.app.get('sql-connection');
    cone.query(`select t.qid,t.user_answers,q.answers,q.qtype from test as t,questions as q where q.qid=t.qid and t.email="${email}";`,function(err,result){
        if(err)
            console.log(err)
        else{
            
            for(var i=0;i<result.length;i++){
                if(result[i].qtype=="SC"){
                    if(result[i].user_answers===result[i].answers)
                    {
                        cone.query(`update test set eval="CORRECT" where qid="${result[i].qid}" and email="${email}";`,function(err,result){
                            if(err)
                            console.log(err);
                        })
                    }
                    else{
                        cone.query(`update test set eval="WRONG" where qid="${result[i].qid}" and email="${email}";`,function(err,result){
                            if(err)
                            console.log(err);
                        })
                    }
                }
                if(result[i].qtype=="MC"){
                    if(result[i].user_answers==null)
                    {
                        cone.query(`update test set eval="WRONG" where qid="${result[i].qid}" and email="${email}";`,function(err,result){
                                    if(err)
                                    console.log(err);
                                })
                    }
                    else
                    {
                        var user=result[i].user_answers.split("~").sort();
                        var ans=result[i].answers.split("~").sort();
                        if(user.length===ans.length)
                        {
                            //check both array
                            if(user.toString()==ans.toString())
                            {
                                cone.query(`update test set eval="CORRECT" where qid="${result[i].qid}" and email="${email}";`,function(err,result){
                                    if(err)
                                    console.log(err);
                                })
                            }
                            else
                            {
                                cone.query(`update test set eval="WRONG" where qid="${result[i].qid}" and email="${email}";`,function(err,result){
                                    if(err)
                                    console.log(err);
                                })
                            }
                            
                        }
                        else
                        {
                            cone.query(`update test set eval="WRONG" where qid="${result[i].qid}" and email="${email}";`,function(err,result){
                                if(err)
                                console.log(err);
                            })
                        }
                    }
                  
                }
               
            }
        }
    })



}

module.exports=_evaluateMCSC;