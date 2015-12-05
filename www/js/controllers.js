angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.getHurt = function(){

    $.ajax(
            {
                url: "http://www.kantor-polres.home.pl/kantor-polres/paneltv-ajax2015.php",
                success: function(result){
                  //var html = result.replace(/<div class="row">/g, '<div class="item item-divider">');
                  //$(".data").html(html);

                  var html = $(result);

                  $.each(html, function(i, val){
                    console.log($('.cell1', val).text());
                  });
                },
                error: function(p1){
                  console.log(p1);
                }
            }
    );
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
