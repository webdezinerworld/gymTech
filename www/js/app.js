// Ionic Starter App
var db = null;
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','starter.controllers', 'ngCordova'])

.run(function($ionicPlatform,$cordovaSQLite) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    db = window.openDatabase("demo.db","1","Demo sqlite test","2000");
    //$cordovaSQLite.execute(db,"CREATE TABLE IF NOT EXISTS people(id integer primary key, name text, address text)");
    $cordovaSQLite.execute(db,"CREATE TABLE IF NOT EXISTS userRegister1(id integer primary key,img BLOB, fName text, lName text)");
  });
})


/*.controller('DashCtrl', function($scope,$cordovaSQLite) {      
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
})
*/
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
