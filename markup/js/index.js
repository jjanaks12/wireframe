/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        this.loginEvent();
        var showCatElement = document.getElementById('show-category');
            showCatElement.addEventListener("click", this.showCategoryEvent);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {

        app.receivedEvent('deviceready');

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);
    },
    loginEvent:function(){
      this.resetView();// resets all the view
      var loginSubmit = document.getElementById('login-submit');
      loginSubmit.addEventListener("click", this.checkLogin); // called after user clicks the login
    },
    showCategoryEvent:function(e){
      e.preventDefault();
      hydra.showCategory();
    },
    checkLogin:function(e){
      e.preventDefault(); // used to prevent default action
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
      if(username.length <= 0 || password.length <= 0){
        console.log("Username and password cannot be null");
        return;
      }
      hydra.login(username, password); // calles hydra for authentication
    },
    resetView:function(){
      var menuSelection = document.getElementById('choose-category');
          menuSelection.setAttribute('style', 'display:none;');
    }
};

app.initialize();
