var app = angular.module('starter.controllers', [])

app.controller('AppCtrl', function($scope, $ionicModal, $timeout) {})

// This factory stores information as a singleton so multiple controllers can access it
app.factory('BeerData', function(){
  return {data: {}};
})

app.factory('details', function(){
  return {data: {}};
})

app.controller('SearchCtrl', function($scope, $state, $http, BeerData) {
  $scope.form = {};
  console.log('in search control');

  $scope.search = function() {
    console.log('made it to search');
    $http({
      method: 'GET',
      url: 'https://salty-taiga-88147.herokuapp.com/beers' // the link to proxy
      //If call successful, store response into BeerData
    }).then(function successCallback(response) {
      BeerData.data = response.data;   // save the response data in the factory
      //console.log(BeerData.data); //.data[0].id
      $state.go('app.beers');          // go to the beer results state
    }, function errorCallBack(response){
      console.log('fail');
    });
  }
})

app.controller('BeersCtrl', function($scope, $http, $state, BeerData) {
  // $scope.beerInfo = [
  //   { "item": 'Reggae', id: 1 },
  //   { "item": 'Chill', id: 2 },
  //   { "item": 'Dubstep', id: 3 },
  //   { "item": 'Indie', id: 4 },
  //   { "item": 'Rap', id: 5 },
  //   { "item": 'Cowbell', id: 6 }
  // ];
  console.log('Made ittobeer');
  console.log(BeerData.data);
  $scope.BeerInfo = BeerData.data;
  


  $scope.searchPage = function() {
    console.log('about to go to search');
    $state.go('app.search');  
  } 
  $scope.getInfo = function() {
    console.log('ummm');
  }

})

app.controller('BeerCtrl', function($scope, $stateParams) {
});
