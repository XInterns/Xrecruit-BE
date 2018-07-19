const config= require('../config.json');
const _gettype=(req,res)=>{
    const cone=req.app.get('sql-connection');
    cone.query(`select DISTINCT ttype from ${config.Test}`,function(err,result){
        if(err)
        console.log(err);
        else{
            res.send(result)
        }
    })
}
module.exports=_gettype;