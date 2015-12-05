/*
 * Author : Suman Kunwar
 */
 var hydra = {
   // used for login purpose
    login:function(username, password){
      var data= JSON.stringify({ username: username, password:password });
      // var response = this.ajax('/login', data ,'POST');
    },
    // used to call the ajax request
    ajax: function(url, params, method) {
      var xRequest, response ;
      var serverurl = "http://127.0.0.1/"+ url;
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
                response = xRequest.responseText;
           }
          };
        xRequest1.open(method, serverurl, "true");
        xRequest1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xRequest1.send(data);
        return response;
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
