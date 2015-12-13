
angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

  $scope.isDetalDataLoading = false;
  $scope.isHurtDataLoading = false;
  
  $scope.getHurt = function(){
    $scope.isHurtDataLoading = true;

    $.ajax(
            {
                url: "http://www.kantor-polres.home.pl/kantor-polres/kursy_wp.php",
                timeout: 5000,
                success: function(result){
                  $(".hurtDiv").html(result);
                  $scope.isHurtDataLoading = false;
                },
                error: function(p1){
                  alert('Błąd połączenia');
                  $scope.isHurtDataLoading = false;

                  console.log($scope.isHurtDataLoading);
                }
            }
    );
  }
  $scope.$on('$ionicView.enter', function(e) {
    $scope.getHurt();
  });

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

 $scope.getDetal = function(){
    $scope.isDetalDataLoading = true;
    $.ajax(
            {
                url: "http://www.kantor-polres.home.pl/kantor-polres/paneltv-ajax2015.php",
                success: function(result){
                  console.log('Success');
                  $(".detalDiv").html(result);
                  $scope.isDetalDataLoading = false;

                },
                error: function(p1){
                  console.log('Error');
                  alert('Błąd połączenia');
                  $scope.isDetalDataLoading = false;
                }
            }
        );
  }


  $scope.$on('$ionicView.enter', function(e) {
    $scope.getDetal();
  });

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});