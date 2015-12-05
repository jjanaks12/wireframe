/*
 * Author : Suman Kunwar
 */
 var hydra = {
   // used for login purpose
    login:function(username, password){
      var dataString = 'username='+username+'&password='+password;

      // console.log(" hydra authenticate", data);
       this.ajax('cp/login.php', dataString ,'POST', this.ajaxResult);

    },
    // used to call the ajax request
    ajax: function(url, params, method, cFunc) {
      var xRequest ;
      var serverurl = "http://127.0.0.1/hydra-backend/"+ url;
      if (window.XMLHttpRequest)
          {
             xRequest = new XMLHttpRequest();
          } else {
             xRequest = new ActiveXObject("Microsoft.XMLHTTP");
          }
      //Send the proper header information along with the request

        xRequest.onreadystatechange = function() {
           if ((xRequest.readyState == 4) && (xRequest.status == 200))
           {
              var response = xRequest.responseText;
                cFunc(response);
                // if(response == "error"){
                //   console.log("an error ocuured");
                // }
           }
          };
        xRequest.open(method, serverurl, "true");
        xRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xRequest.send(params);


     },
     ajaxResult:function(result){
       if(result == "error"){

       }else{
         var results = JSON.parse(result);
         if(results.from == "login"){ //hydra user matched
            window.localStorage.setItem("hydra-user", results.username);
            var loginElement = document.getElementById("hydra-login");
                loginElement.setAttribute('style', 'display:none;');
         }
        //  console.log("resss", results.from);
       }
    
     },
     //used to render the view
     renderList:function(list, params){

     },
     //remove data from local Storage
     logout:function(){
         window.localStorage.clear();
     }
 }

 //
