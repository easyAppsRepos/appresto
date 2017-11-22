angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state, $ionicPopup) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.myTitle = 'IONIC RATINGS DEMO';

  $scope.ratingsObject = {
    iconOn: 'ion-ios-star', //Optional
    iconOff: 'ion-ios-star-outline', //Optional
    iconOnColor: 'rgb(200, 200, 100)', //Optional
    iconOffColor: 'rgb(200, 100, 100)', //Optional
    rating: 4, //Optional
    minRating: 0, //Optional
    readOnly: false, //Optional
    callback: function(rating, index) { //Mandatory    
      $scope.ratingsCallback(rating, index);
    }
  };

  $scope.ratingsCallback = function(rating, index) {
    console.log('Selected rating is : ', rating, ' and index is ', index);
  };
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };



   // An alert dialog
   $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Gracias!',
       template: '<div style="text-align:center">Esperamos verlo pronto</div>'
     });
     alertPopup.then(function(res) {
       $state.go('app.browse');
     });
   };






  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];



  $scope.toggleSideMenu = function() {

    console.log('toggleSideMenu');
     console.log($ionicSideMenuDelegate.isOpen());
     

 if ($ionicSideMenuDelegate.isOpen()) {
    $ionicSideMenuDelegate.toggleLeft(false); // close
  } else {
    $ionicSideMenuDelegate.toggleLeft(); // open
  }
};



})


.directive('hideTabs', function($rootScope, $timeout, $ionicTabsDelegate) {
  return {
    restrict: 'A',
    link: function($scope, $el) {
      $scope.$on("$ionicView.beforeEnter", function () {
        $ionicTabsDelegate.showBar(false);
      });
      $scope.$on("$ionicView.beforeLeave", function () {
        $ionicTabsDelegate.showBar(true);
      });
    }
  };
})
.controller('favCtrl', function($scope, $stateParams) {



})
.controller('PlaylistCtrl', function($scope, $stateParams) {
})


    .directive('ionicRatings', ionicRatings);

  function ionicRatings() {
    return {
      restrict: 'AE',
      replace: true,
      template: '<div class="text-center ionic_ratings">' +
        '<span class="icon {{iconOff}} ionic_rating_icon_off" ng-style="iconOffColor" ng-click="ratingsClicked(1)" ng-if="rating < 1" ng-class="{\'read_only\':(readOnly)}"></span>' +
        '<span class="icon {{iconOn}} ionic_rating_icon_on" ng-style="iconOnColor" ng-click="ratingsUnClicked(1)" ng-if="rating > 0" ng-class="{\'read_only\':(readOnly)}"></span>' +
        '<span class="icon {{iconOff}} ionic_rating_icon_off" ng-style="iconOffColor" ng-click="ratingsClicked(2)" ng-if="rating < 2" ng-class="{\'read_only\':(readOnly)}"></span>' +
        '<span class="icon {{iconOn}} ionic_rating_icon_on" ng-style="iconOnColor" ng-click="ratingsUnClicked(2)" ng-if="rating > 1" ng-class="{\'read_only\':(readOnly)}"></span>' +
        '<span class="icon {{iconOff}} ionic_rating_icon_off" ng-style="iconOffColor" ng-click="ratingsClicked(3)" ng-if="rating < 3" ng-class="{\'read_only\':(readOnly)}"></span>' +
        '<span class="icon {{iconOn}} ionic_rating_icon_on" ng-style="iconOnColor" ng-click="ratingsUnClicked(3)" ng-if="rating > 2" ng-class="{\'read_only\':(readOnly)}"></span>' +
        '<span class="icon {{iconOff}} ionic_rating_icon_off" ng-style="iconOffColor" ng-click="ratingsClicked(4)" ng-if="rating < 4" ng-class="{\'read_only\':(readOnly)}"></span>' +
        '<span class="icon {{iconOn}} ionic_rating_icon_on" ng-style="iconOnColor" ng-click="ratingsUnClicked(4)" ng-if="rating > 3" ng-class="{\'read_only\':(readOnly)}"></span>' +
        '<span class="icon {{iconOff}} ionic_rating_icon_off" ng-style="iconOffColor" ng-click="ratingsClicked(5)" ng-if="rating < 5" ng-class="{\'read_only\':(readOnly)}"></span>' +
        '<span class="icon {{iconOn}} ionic_rating_icon_on" ng-style="iconOnColor" ng-click="ratingsUnClicked(5)" ng-if="rating > 4" ng-class="{\'read_only\':(readOnly)}"></span>' +
        '</div>',
      scope: {
        ratingsObj: '=ratingsobj',
        index: '=index'
      },
      link: function(scope, element, attrs) {

        //Setting the default values, if they are not passed
        scope.iconOn = scope.ratingsObj.iconOn || 'ion-ios-star';
        scope.iconOff = scope.ratingsObj.iconOff || 'ion-ios-star-outline';
        scope.iconOnColor = scope.ratingsObj.iconOnColor || 'rgb(200, 200, 100)';
        scope.iconOffColor = scope.ratingsObj.iconOffColor || 'rgb(200, 100, 100)';
        scope.rating = scope.ratingsObj.rating || 0;
        scope.minRating = scope.ratingsObj.minRating || 0;
        scope.readOnly = scope.ratingsObj.readOnly || false;
        scope.index = scope.index || 0;

        //Setting the color for the icon, when it is active
        scope.iconOnColor = {
          color: scope.iconOnColor
        };

        //Setting the color for the icon, when it is not active
        scope.iconOffColor = {
          color: scope.iconOffColor
        };

        //Setting the rating
        scope.rating = (scope.rating > scope.minRating) ? scope.rating : scope.minRating;

        //Setting the previously selected rating
        scope.prevRating = 0;

        scope.$watch('ratingsObj.rating', function(newValue, oldValue) {
          setRating(newValue);
        });

        function setRating(val, uiEvent) {
          if (scope.minRating !== 0 && val < scope.minRating) {
            scope.rating = scope.minRating;
          } else {
            scope.rating = val;
          }
          scope.prevRating = val;
          if (uiEvent) scope.ratingsObj.callback(scope.rating, scope.index);
        }

        //Called when he user clicks on the rating
        scope.ratingsClicked = function(val) {
          setRating(val, true);
        };
        
        //Called when he user un clicks on the rating
        scope.ratingsUnClicked = function(val) {
          if (scope.minRating !== 0 && val < scope.minRating) {
            scope.rating = scope.minRating;
          } else {
            scope.rating = val;
          }
          if (scope.prevRating == val) {
            if (scope.minRating !== 0) {
              scope.rating = scope.minRating;
            } else {
              scope.rating = 0;
            }
          }
          scope.prevRating = val;
          scope.ratingsObj.callback(scope.rating, scope.index);
        };
      }
    };
  }

