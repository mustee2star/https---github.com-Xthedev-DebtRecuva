/* -------------------------------------------------------------------------- */
/*                                    LOGIN                                   */
/* -------------------------------------------------------------------------- */
function logIn(){
    
      // selecting the input element and get its value 
      let email = document.getElementById("email");
      let password = document.getElementById("password");
      
      var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  
      if(!email.value){ 
          swal("Enter an email address!");
          email.focus();
          return false;
      }else if(!password.value){
          swal("Enter your password!");
          email.focus();
          return false;
      }else if(!(email.value.match(mailformat))){
          swal("You have entered an invalid email address!");
          email.focus();
          return false;
      }else {
        var settings = {
            "url": "http://touchofcloud.com.ng:38313/api/login",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify({
              "email":  email.value,
              "password": password.value
            }),
          };
          
          $.ajax(settings).done(function (response) {
            console.log(response);
          });
        
  
      //  ------- if login is successfull go to admin page -----------//
  
      $.ajax(settings).done(function (response) {
        if(response.error){
          swal("FAILED", response.message, "error");
          return false;
        }else{
          swal("SUCCESS", response.message, "success");
            localStorage.setItem('access',"Bearer"+response.accesstoken);
            // localStorage.setItem('adminkey',response.dantownid);
            // localStorage.setItem('admin', JSON.stringify(response.data));
            setTimeout(()=>{
                location.href="/index2.html";
            },3000)
        }
      });
    }
     
      
  };
/* -------------------------------------------------------------------------- */
/*                                END OF LOGIN                                */
/* -------------------------------------------------------------------------- */