var app = angular.module('IAUApp',[]);

app.controller('IAUController', function MainCtrl($scope, $http){
  //fun stuuf here
  $scope.apiURL = "http://130.101.92.77/NasaSuits/api/eva/iau/GetIAU.php?iau_id=";
  console.log("got here");

  $scope.eva = { evaID: "1"};

  $scope.kyle = {
    name: "kyle",
    status: "happy"
  };
  $scope.kylename = function(){return $scope.kyle.name + " is " + $scope.kyle.status}


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

  $scope.getIAU(1);
});
