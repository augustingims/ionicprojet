angular.module('starter.controllers', [])

  .controller('starter', function($scope, ionicMaterialInk, ionicMaterialMotion, $ionicSideMenuDelegate, $timeout, $http) {

    $timeout(function(){
      ionicMaterialInk.displayEffect();
      ionicMaterialMotion.ripple();
    },0);

    $scope.ordinateurs = [];

    $scope.loadAll = function () {
      $http.get('http://127.0.0.1:8080/api/ordinateurs').success(function(response){
        $scope.ordinateurs = response;
        console.log($scope.ordinateurs);
      }).error(function(reason){
        console.log(reason);
      });

    };
    $scope.loadAll();

    $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };
  })
  .controller('mainhome', function($scope, $http,ionicMaterialInk, ionicMaterialMotion, $timeout) {

    $timeout(function(){
      ionicMaterialInk.displayEffect();
      ionicMaterialMotion.ripple();
    },0);

    $scope.ordinateurs = [];

    $scope.loadAll = function () {
      $http.get('http://127.0.0.1:8100/api/ordinateurs').success(function(response){
        $scope.ordinateurs = response;
        console.log($scope.ordinateurs);
      }).error(function(reason){
        console.log(reason);
      });

    };
    $scope.loadAll();

  })

  .controller('detailsshow', function($scope,$http,$stateParams,$location,ionicMaterialInk, ionicMaterialMotion, $timeout) {

    $timeout(function(){
      ionicMaterialInk.displayEffect();
      ionicMaterialMotion.ripple();
    },0);

    $scope.ordinateur = {};
    $scope.commentaires = [];
    $scope.photo = function(){
      $location.path('/home');
    };

    $scope.comments = function(image){
      $http.get('http://127.0.0.1:8080/api/nbrescom/'+image).success(function(response){
        console.log(response);
        $scope.nbrecomment = response;
      }).error(function(reason){
        console.log(reason);
      });

    };

    $scope.load = function() {
      $http.get('http://127.0.0.1:8100/api/ordinateurs/'+ $stateParams.id).success(function(response){
        $scope.ordinateur = response;
      }).error(function(reason){
        console.log(reason);
      });
      $scope.comments($stateParams.id);
    };
    $scope.load();

  })
  .controller('CommentsCtrl', function($scope, ionicMaterialInk, ionicMaterialMotion, $timeout, $http) {

    $timeout(function(){
      ionicMaterialInk.displayEffect();
      ionicMaterialMotion.ripple();
    },0);

    $http.get('http://127.0.0.1:8080/api/commentaire/findAll').success(function(response){
      console.log(response);
      $scope.commentaire = response;
    }).error(function(reason){
      console.log(reason);
    });
  })
  .controller('Comment',function($scope,$http,$stateParams,ionicMaterialInk, ionicMaterialMotion, $timeout){

    $timeout(function(){
      ionicMaterialInk.displayEffect();
      ionicMaterialMotion.ripple();
    },0);

    $scope.commentaires = [];
    $scope.loadcom = function (image) {
      $http.get('http://127.0.0.1:8100/api/comforimage/'+$stateParams.id).success(function(response){
        console.log(response);
        $scope.commentaires = response;
      }).error(function(reason){
        console.log(reason);
      });
    };
    $scope.loadcom();
  })
  .controller('Commenter',function($scope,$http,$stateParams,$location,ionicMaterialInk, ionicMaterialMotion, $timeout){

    $timeout(function(){
      ionicMaterialInk.displayEffect();
      ionicMaterialMotion.ripple();
    },0);

    $scope.commentaire = {};

    $scope.commenter = function () {
      $scope.commentaire.image = $stateParams.id ;
      $http.post('http://127.0.0.1:8100/api/commentaire',$scope.commentaire).success(function(response){
        console.log(response);
      }).error(function(reason){
        console.log(reason);
      });
      $scope.commentaire = {};
      $location.path('/app/comment/'+$stateParams.id);
    };
  })
  .controller('AboutCtrl', function($scope, ionicMaterialInk, ionicMaterialMotion, $timeout) {

    $timeout(function(){
      ionicMaterialInk.displayEffect();
      ionicMaterialMotion.ripple();
    },0);

  });
