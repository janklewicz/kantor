angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.getHurt = function(){

    $.ajax(
            {
                url: "http://www.kantor-polres.home.pl/kantor-polres/kursy_wp.php",
                success: function(result){
                  var html = $(result);
                  $(".hurtDiv").html(html);
                },
                error: function(p1){
                  console.log(p1);
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

    $.ajax(
            {
                url: "http://www.kantor-polres.home.pl/kantor-polres/paneltv-ajax2015.php",
                success: function(result){
                  //var html = result.replace(/<div class="row">/g, '<div class="item item-divider">');
                  //$(".data").html(html);
                  var html = $(result);

                  var attrs = { };

                  $.each($(".cell", html)[0].attributes, function(idx, attr) {
                      attrs[attr.nodeName] = attr.nodeValue;
                  });


                  $(".cell", html).replaceWith(function () {
                      attrs.text = $(this).text();
                      return $("<a />", attrs);
                  });

                  console.log($('.cell1', html).val());


                  $.each(html, function(i, val){
                    //console.log(val);
                  });

                  $(".detalDiv").html(html);
                },
                error: function(p1){
                  console.log(p1);
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
