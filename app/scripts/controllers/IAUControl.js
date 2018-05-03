var app = angular.module('IAUApp',[]);

app.controller('IAUController', function MainCtrl($scope, $http){
  //fun stuuf here
  $scope.apiURL = "http://130.101.92.77/NasaSuits/api/eva/iau/GetIAU.php?iau_id=";

  $scope.getIAU = function(id){
    $http({
        method: 'GET',
        url: $scope.apiURL + parseInt(id)
      }).then(
        function success(result){

        $scope.IAU = result.data;
        console.log($scope.IAU);
      },
       function failure(error){
        console.log(error);
      });
  };

  $scope.getIAU(1893);
});
