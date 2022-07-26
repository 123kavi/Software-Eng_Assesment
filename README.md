

* After starting the backend, the admin's email and password are stored in the mongodb database through seed file.  after that admin can login to the  system with that e-mail and password.  Then it will be redirected to the registration page and it will include admin previous information(username,password,email).  Admin can change the password.  After changing the password and entering all relevant information and registering, it will be automatically logged out.
* Now to enter the system again, admin must login to the system using the newly entered password and email.
* The logged in admin has the ability to create new users in the system. An admin can choose whether the user he creates is an admin or a student. When a new user is created using a new user's email and username, a temporary password and login URL will go to that user's email. Access token verify the relevant user.The password cannot be reset from the backend without a user's access token.
* The relevant user can log into the system using the temporary password and the relevant email.  After logging in, user will be directly redirected to the registration page.  user can reset the temporary password by using his relevant information and a new password on the registration page.  Immediately after reset he will log out again.
* There is a separate task for users to log into the system.  Then when user who logs in as a admin, he is redirected to an admin page and a user who logs in as a student is redirected to the student page.  Accordingly, user has the ability to create a user in the admin page. 
*  A user who is logged in as a student has his relevant task.  Accordingly, he has the ability to create new notes.  It is possible to delete, update and view those notes.  All notes created in this way are shown as a list in a table.  One page contains 5 notes.can view other notes using pagination option




![my note](https://user-images.githubusercontent.com/83937185/181030228-9aea33e6-8589-4c29-87a4-fc2075aeadab.jpg)
