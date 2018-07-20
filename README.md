# Xrecruit-BE

Some Changes can be made in Config.js accordingly 
Admin_login table 
User_login table
Test table
Question Table
Language Table
User_details Table

1. Entry  point server
2. Admin Login (/adminlogin) authenticates and if yes then send a message 1
3. Admin Question add(/addquestion) He can add Questions (question,qtype,options(if SCQ or MCQ),answers(MCQ or SCQ),difficulty(2 years,internship etc..),langugage(java,javascript etc..) and qid is auto generated)

(All the multiple entries(options,answers,language) are to be separated by tilde sign)

4. Show All questions(/getquestions)and delete questions with qid(/deletequestion)

5. Admin can add User with email,number of easy,medium,hard question ,message to be sent in email,duration,test difficulty,prog_languages (password will be auto generated) 
   If user email already exists we  will return the email ids of existing users with message 0 or if number of questions of specific language or category(easy,medium,hard) is less than the required number of question for the test then user and test wont be created and message -1 will be sent

6. After Successfully adding User a mail(mailconnect.js) will be sent to the added email with message and login credentials with a created template(email_template.js) with a test link too.

7. Also Question Paper(question_paper.js) will be created for that user and added to database 	  (table name test)

The test is created by selecting all the questions of the required language type and number of easy , medium , hard question in questionpaper(question_paper.js).

8. Admin Testdata(result_get.js) where email or difficulty can be passed as params (/gettestdata/:email/:ttype)

9. Admin(user_score.js) can see for the status of the test for a particular email (/getscore/:email)

10. Admin can view all(get_testinfo.js) the details of every user by email(/getinfo/:email)

11. He can evaluate(evaluate_text.js) text questions with qid, email and check(CORRECT OR WRONG).

12. Admin (get_userdetails.js)can view the details added by user at the time of test (/getuserdetails/:email)

13. While adding question or adding user , admin can see all the languages that are available in the table(languages).

14. Admin can also add new languages by (/addlanguage).

15. After user clicks on the link provided in the email, the user will be redirected to user login page.

16. User login is verified (/userlogin) and a response with message 1 and test info will be sent to the front end(questions, email, options, user_answers, duration, test type, status(if 0 that means the test has not been started yet, if 1 the test is completed,  if -1 the test is incomplete), qtype, qid , eval).
  
17. User details are added (/details) (email, name , contact, address, college, percentage).

18. User's answers for attempted questions are added by qid to the table (test) through (/answers) with tilde symbol(for MCQ).

19. Duration for the test is updated (/updatetime) with email and duration.

20. Once the user submits or the timer is 0 , the test will be completed, status of table test is changed to 1, and all the userlogin details will be deleted from user_login table.

21. After submittion (evaluate_MC_SC.js) will be called automatically , and all the single correct and multiple correct question will be evaluated from pending to Correct or wrong rest questions(Text) can evaluated by admin


22. Once All the questions are CORRECT OR WRONG from pending the score is calculated and updated for point 9.
