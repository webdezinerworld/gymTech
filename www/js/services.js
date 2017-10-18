angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.service('Auth', function($q, $ionicLoading) {

   this.getLoginStatus = function() {
      var defer = $q.defer();

      FB.getLoginStatus(function(response) {
    
         if (response.status === "connected") {
            console.log(JSON.stringify(response));
         } else {
            console.log("Not logged in");
         }
      });

      return defer.promise;
   }
   
   this.loginFacebook = function() {
      var defer = $q.defer();

      FB.login(function(response) {
    
         if (response.status === "connected") {
            console.log(JSON.stringify(response));
         } else {
            console.log("Not logged in!");
         }
      });

      return defer.promise;
   }

   this.logoutFacebook = function() {
      var defer = $q.defer();

      FB.logout(function(response) {
         console.log('You are logged out!');
      });

      return defer.promise;
   }

   this.getFacebookApi = function() {
      var defer = $q.defer();

      FB.api("me/?fields = id,email", [], function(response) {
    
         if (response.error) {
            console.log(JSON.stringify(response.error));
         } else {
            console.log(JSON.stringify(response));
         }
      });

      return defer.promise;
   }
});
