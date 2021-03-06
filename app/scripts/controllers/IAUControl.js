var app = angular.module('IAUApp',['xeditable']);

app.run(['editableOptions', function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
}]);

app.controller('IAUController', function MainCtrl($scope, $http, $window){
  //fun stuuf here
  $scope.apiURL = "http://130.101.92.77/NasaSuits/api/eva/iau/GetIAU.php?iau_id=";
  var video_iu = {
    iau_id: "1893",
    iu_id: "1498",
    iu_link: "https://www.youtube.com/watch?v=Z62z64-AyH0",
    iu_position: "0,0,0",
    iu_rotation: "0,0,0",
    iu_scale: "1,1,1",
    iu_space: "EVA_SPHERE_SPACE",
    iu_type: "video"
  };

  $scope.getIAU = function(id){
    $http({
        method: 'GET',
        url: $scope.apiURL + parseInt(id)
      }).then(
        function success(result){

        $scope.IAU = result.data;
        //$scope.IAU.iau_ius.push(video_iu);
        console.log($scope.IAU);
        $scope.IAU.iau_ius.forEach(function(iu){
          if(iu.iu_type === 'video')
          {
            iu.fileType = $scope.getFileType(iu.iu_link);
            iu.showVid = true;
          }
          if(iu.iu_type === 'image')
          {
            iu.showImg = true;
          }
        });
      },
       function failure(error){
        console.log(error);
      });
  };

  $scope.videoRedirect = function(url){
    $window.open(url, '_blank');
  }

  $scope.getFileType = function(url){
    var arr = url.split('.');
    var fileType = 'video/' + arr[arr.length-1];
    return fileType;
  }

  //$scope.getIAU(1893);
  $scope.getIAU(1978);

});
