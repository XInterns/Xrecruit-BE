const express=require('express');
const router=express.Router();

const _resultget=require('./result_get')
const _adminlogin =require('./admin_login')
const _addusers=require('./add_users')
const _question=require('./add_questions')
const _userlogin=require('./user_login')
const _userdetails=require('./user_details')
const _useranswer=require('./user_answer')
const _updatetime=require('./update_time')
const _evaluatetext=require('./evaluate_text')
const _score=require('./user_score')
const _getuserdetails=require('./get_userdetails')
const _testinfo=require('./get_testinfo')
const _showquestions=require('./get_allquestions')
const _deletequestion=require('./delete_questions')
const _addlang=require('./add_languages')
const _getlang=require('./get_languages')

router.get('/getscore/:email',_score);
router.get('/gettestdata/:email/:type',_resultget);
router.get('/getinfo/:email',_testinfo);
router.get('/getuserdetails/:email',_getuserdetails);
router.get('/getquestions',_showquestions);
router.get('/getlanguage/:lang',_getlang);

router.post('/addlanguage',_addlang);
router.post('/deletequestion',_deletequestion);
router.post('/evaluatetext',_evaluatetext);
router.post('/updatetime',_updatetime);
router.post('/answers',_useranswer);
router.post('/details',_userdetails);
router.post('/addquestion',_question);
router.post('/addusers',_addusers);
router.post('/adminlogin',_adminlogin);
router.post('/userlogin',_userlogin);


module.exports=router;