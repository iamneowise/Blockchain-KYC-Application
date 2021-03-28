function validateForm() {
    // window.open('index.html');
    // return;
     var user_name_1='user1',user_name_2='user2',user_name_3='user3',user_name_4='user4';
     var un = document.loginform.usr.value;
     var pw = document.loginform.pword.value;
     //alert(un);
     //alert(pw);
     
     var password1 = "password";
     if ((un == user_name_1 || un==user_name_2 || un==user_name_3 || un==user_name_4 ) && (pw == password1)) {
         //alter("sucessfull login");
         window.open('home.html');
        // return true;
     }
 
     
     else {
         alert ("Login was unsuccessful, please check your username and password");
         return false;
     }
   }