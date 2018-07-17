const express = require('express')
const app = express()

var check=(prog,lang)=>{
    for(let i=0;i<prog.length;i++){
        for(let j=0;j<lang.length;j++){
            if(prog[i].toLowerCase()==lang[j].toLowerCase()){
                return 1;
            }
        }
    }
    return 0;
}
const _questionpaper=(req,email,easy_ques,medium_ques,hard_ques,duration,ttype,prog_language)=>new Promise((res,resolve)=>{{
    
    const cone=req.app.get('sql-connection');
    var r_val=1;
    let dbPromise=(cone)=>new Promise((resp,rej)=>{
    
    cone.query(`SELECT * FROM questions`,function(err,result){
        if(err){
            console.log(err)
        }
        else{
            let i;
            var easy=[];
            var medium=[];
            var hard=[];
            var prog=prog_language.split("~");
            var counter=0;
            for(i=0;i<result.length;i++)
            {
                var diff=result[i].difficulty
                var lang=(result[i].language).split("~");
                
                let flag=check(prog,lang)
                if(diff.toLowerCase()=="easy" &&flag==1){
                    easy.push(result[i]);
                    counter++;
                }
                else if(diff.toLowerCase()=="medium" &&flag==1){
                    medium.push(result[i]);
                    counter++;
                }
                else if(diff.toLowerCase()=="hard" &&flag==1){
                    hard.push(result[i]);
                    counter++;
                }
            }
            if(counter<(easy_ques+medium_ques+hard_ques)||easy_ques>easy.length||medium_ques>medium.length||hard_ques>hard.length)
            {
               
                r_val=0;
            }
            else
            {
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
        }


      
    
        resp(r_val);
    }
    );
}
);
dbPromise(cone).then((r_val) => {

    res(r_val);  
   })
   
}
});
module.exports= _questionpaper;