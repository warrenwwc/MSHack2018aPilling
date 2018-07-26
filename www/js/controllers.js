angular.module('app.controllers', [])
  
.controller('alarmCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cameraCtrl', ['$scope', '$stateParams', '$http', '$interval', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $interval) {
    $scope.febricol = "Required";
    $scope.cevit = "Required";
    $scope.buttonText = "Start Demo";
    $scope.defaultProp = 0.5;
    
    $scope.TakePics = function() {
        $scope.buttonText = "Show the following drugs";
        var audio = new Audio('mp3/alarm.mp3');
        audio.loop = true;
        audio.play();

        var myInterval = $interval(function() {
            CameraPreview.takePicture(async function(imgData){

                link = await $http(imgUrlReq(imgData));
    
                res = await $http(cvApiReq2(link.data));

                $scope.medicines = [];

                for (i in res.data.predictions) {
                    if (res.data.predictions[i].tagName == "Febricol Tab 100mg") {
                        if (res.data.predictions[i].probability > $scope.defaultProp){
                            $scope.febricol = "Detected: " + res.data.predictions[i].probability;
                        }
                        else {
                            $scope.febricol = "Required";
                        }
                    }
                    else if (res.data.predictions[i].tagName == "Cevit 100mg") {
                        if (res.data.predictions[i].probability > $scope.defaultProp){
                            $scope.cevit = "Detected: " + res.data.predictions[i].probability;
                        }
                        else {
                            $scope.cevit = "Required";
                        }
                    }
                    else {
                        if (res.data.predictions[i].probability > $scope.defaultProp) {
                            $scope.medicines.push(res.data.predictions[i]);
                        }   
                    }
                }

                if (($scope.febricol != "Required") && ($scope.cevit != "Required") && ($scope.medicines.length == 0)){
                    $scope.correct == true;
                    audio.pause();
                    $scope.buttonText = "Correct! Click to Start Demo again!"
                    $interval.cancel(myInterval);
                }

                // if (($scope.febricol != "Required") && ($scope.medicines.length == 0)){
                //     $scope.correct == true;
                //     audio.pause();
                //     $scope.buttonText = "Correct! Click to Start Demo again!"
                //     $interval.cancel(myInterval);
                // }

                $scope.$apply();
                
            });
          }, 1000);
    };

}])
   
.controller('settingCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
    