const express = require('express')
const app = express()
const _questionpaper=(req,email,easy_ques,medium_ques,hard_ques,duration,ttype)=>{

    const cone=req.app.get('sql-connection');
    var easy=[];
    var medium=[];
    var hard=[];
    cone.query(`SELECT * FROM questions`,function(err,result){
        if(err){
            console.log(err)
        }
        else{
            var i;
            for(i=0;i<result.length;i++){
                var diff=result[i].difficulty
                if(diff.toLowerCase()=="easy"){
                    easy.push(result[i]);
                }
                else if(diff.toLowerCase()=="medium"){
                    medium.push(result[i]);
                }
                else if(diff.toLowerCase()=="hard"){
                    hard.push(result[i]);
                }
            }
            
            while(easy_ques!=0)
            {
                var item = easy[Math.floor(Math.random()*easy.length)];
                var index=easy.indexOf(item);
                easy.splice(index,1);
                cone.query(`insert into test(email,question,options,duration,ttype,status,qtype,qid,eval) values("${email}","${item.question}","${item.options}","${duration}","${ttype}","0","${item.qtype}","${item.qid}","pending");`,function(err,result){
                    if(err)
                    console.log(err);
                    
                })
                
                easy_ques --;
            }
            while(medium_ques!=0)
            {
                var item = medium[Math.floor(Math.random()*medium.length)];
                var index=medium.indexOf(item);
                medium.splice(index,1);
                cone.query(`insert into test(email,question,options,duration,ttype,status,qtype,qid,eval) values("${email}","${item.question}","${item.options}","${duration}","${ttype}","0","${item.qtype}","${item.qid}","pending");`,function(err,result){
                    if(err)
                    console.log(err);
                    
                })
                
                medium_ques --;
            }
           
            while(hard_ques!=0)
            {
                var item = hard[Math.floor(Math.random()*hard.length)];
                var index=hard.indexOf(item);
                hard.splice(index,1);
                cone.query(`insert into test(email,question,options,duration,ttype,status,qtype,qid,eval) values("${email}","${item.question}","${item.options}","${duration}","${ttype}","0","${item.qtype}","${item.qid}","pending");`,function(err,result){
                    if(err)
                    console.log(err);
                    
                })
                
                hard_ques --;
            }
            
        }


    })
   
}

module.exports= _questionpaper;