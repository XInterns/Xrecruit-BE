const _mailer=require('./mailconnect.js');
let _questionpaper=require('./question_paper.js');

const _addusers=(req,res)=>{
   const cone=req.app.get('sql-connection');
   var query=req.body;
   var emails=[];
   var dbcount=0;
   let myFirstPromise = new Promise((resolve, reject) => {

   for(var i=0;i<query.length;i++)
   {
       var email=query[i].email;
       var easy_ques=parseInt(query[i].easy_ques);
       var medium_ques=parseInt(query[i].medium_ques);
       var hard_ques=parseInt(query[i].hard_ques);
       var message=query[i].message;
       var password=Math.random().toString(36).slice(-8);
       var duration=query[i].duration;
       var ttype=query[i].ttype;
       var prog_language=query[i].prog_language;

       var check=1;
       let dbPromise=(email,easy_ques,medium_ques,hard_ques,message,password,duration)=>new Promise((resp,rej)=>{
           cone.query(`insert into user_login values("${email}","${easy_ques}","${medium_ques}","${hard_ques}","${message}","${password}","${duration}","${ttype}","${prog_language}");`,function(err,result){
               dbcount++;
                if(err)
                   {
                       check=0;
                       emails.push(email)
                       resp(check);
                   }
                   else
                   {
                       check=1;
                       _mailer(email,password,message);
                     
                       _questionpaper(req,email,easy_ques,medium_ques,hard_ques,duration,ttype,prog_language).then(
                        (r_val) => {
                           
                            cone.query(`delete from user_login where email="${email}";`,function(err,result){
                               
                            });
                            resp(r_val);
                        
                        }
                       );
                       
                   }
            })
       });

       dbPromise(email,easy_ques,medium_ques,hard_ques,message,password,duration,ttype).then((flag) => {

        
          resolve(flag);
       })
   }
         });

         myFirstPromise.then((flag) => {
           if(emails.length>0||flag==0)
           {
               var result={
                   "message":"0",
                   "emails":emails
               }
               res.send(result);
           }    
               else{
                   var result={
                       "message":"1",
                       "emails":""
                   }
                   res.send(result);
               
                   }
         })
}

module.exports=_addusers;