const config= require('../config.json');

const _getuserdetails=(req,res)=>{
    const cone=req.app.get('sql-connection');

    var email=req.params.email;
    cone.query(`select * from ${config.User_Details} where email="${email}" `,function(err,result){
            if(err)
            console.log(err);
            else{
            res.send(result);
            }
            
    })


}
module.exports=_getuserdetails;