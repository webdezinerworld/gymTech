var imgUrl = "";
angular.module('starter.controllers', ['ngCordova'])

.controller('DashCtrl', function($scope,$cordovaSQLite) {      
    /*$scope.add = function(user){
        console.log(user);
        var query="INSERT INTO people(name, address)VALUES(?,?)";
        $cordovaSQLite.execute(db,query,[user.name,user.address])
    }*/
})

/*
.controller('DashCtrl', function($scope,$cordovaSQLite) {      
    alert("loppppppp");
    var person = [];
    $scope.add = function(user){
      var query="INSERT INTO people(name, address)VALUES(?,?)";
      $cordovaSQLite.execute(db,query,[user.name,user.address])
    }

    $scope.getData = function(){
      db.transaction(function (tx){
        tx.executeSql('SELECT * FROM people',[],function(tx,results) {
          var len = results.rows.length;
          console.log(len);
          person = (results.rows)
          console.log(person)
          if(len>0) {
            var obj = [];
            for (var i = 0; i < len; i++) {
              obj.push(results.rows.item(i))
              console.log(results.rows.item(i))
            }
            $scope.$apply(function () {
              $scope.items = (obj);
            });
          }
        });
      });
    }
})*/

.controller('ChatsCtrl', function($scope, Auth, $ionicLoading) {
  $scope.checkLoginStatus = function() {
          getLoginUserStatus();
       }

       $scope.loginFacebook = function(userData) {
          loginFacebookUser();
       };

       $scope.facebookAPI = function() {
          getFacebookUserApi();
       }

       $scope.logoutFacebook = function() {
          logoutFacebookUser();
       };

       function loginFacebookUser() {
          return Auth.loginFacebook();
       }

       function logoutFacebookUser() {
          return Auth.logoutFacebook();
       }

       function getFacebookUserApi() {
          return Auth.getFacebookApi();
       }

       function getLoginUserStatus() {
          return Auth.getLoginStatus();
       }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  //$scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope,$cordovaSQLite) {
    $scope.myImg = false;
// Take picture with device camera
    
    $scope.add = function(user){
        console.log(user);
        var query="INSERT INTO userRegister1(img, fName, lName)VALUES(?,?,?)";
        $cordovaSQLite.execute(db,query,[user.img,user.fName,user.lName])
    }

    $scope.getData = function(){
      alert(("results"));
      db.transaction(function (tx){
        tx.executeSql('SELECT * FROM userRegister1',[],function(tx,results) {
            alert(JSON.stringify(results));
          var len = results.rows.length;
          alert(len);
          person = (results.rows)
          alert(JSON.stringify(person));
          if(len>0) {
            var obj = [];
            for (var i = 0; i < len; i++) {
              obj.push(results.rows.item(i))
              console.log(results.rows.item(i))
            }
            $scope.$apply(function () {
              $scope.items = (obj);
            });
          }
        });
      });
    }

    $scope.captureImg = function()
    {
        imgUrl = "";
        var options = {
            quality: 50,
            destinationType : navigator.camera.DestinationType.FILE_URI,
            sourceType: navigator.camera.PictureSourceType.CAMERA,
            encodingType: navigator.camera.EncodingType.JPEG,
        }
        options.targetHeight = 100;
        options.targetWidth = 100;
        navigator.camera.getPicture(onSuccess, onFail, options);
        function onSuccess(imageData){
            alert(JSON.stringify(imageData));
            $scope.$apply(function () {
                $scope.myImg = true;
                $scope.myImage = "data:image/jpeg;base64," + imageData;
                imgUrl = "data:image/jpeg;base64," + imageData;
            })
        }
        function onFail(message){
            alert('Failed because: ' + message);
        }
    }
// Retrieve Image from Device gallery
    $scope.openGallery = function()
    {
        imgUrl = "";
        var options = {
            quality: 50,
            destinationType : navigator.camera.DestinationType.FILE_URI,
            sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: navigator.camera.EncodingType.JPEG,
        }
        options.targetHeight = 100;
        options.targetWidth = 100;
        navigator.camera.getPicture(onSuccess, onFail, options);
        function onSuccess(imageData){
            $scope.$apply(function () {
                $scope.myImg = true;
                $scope.myImage = "data:image/jpeg;base64," + imageData;
                imgUrl = "data:image/jpeg;base64," + imageData;
                $scope.digest();
            });
        }
        function onFail(message){
            console.log('Failed because: ' + message);
        }
    }




});
