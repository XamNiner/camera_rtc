'use strict';

/**
 * @ngdoc function
 * @name cameraRtcApp.controller:CamCtrl
 * @description
 * # CamCtrl
 * Controller of the cameraRtcApp
 */
angular.module('cameraRtcApp')
  .controller('CamCtrl', function ($scope) {
    var _vid = null,
        padData = null;
    
    //dimension and position of cam display
    $scope.padOpts = {x: 0, y: 0, w: 25, h: 25};
    
    $scope.channel = {

    }; //receives video element
    $scope.camError = false; //no access granted or no browser support
    
    //display error message on failure
    $scope.onError = function(err) {
        $scope.$apply(
            function() {
                $scope.camError = err;
            }
        );
    };
    
    //access to webcam was granted
    $scope.onSuccess = function() {
        _vid = $scope.channel.video; //captured video data
        $scope.$apply(
            function() {
                $scope.padOpts.w = _vid.width;
                $scope.padOpts.h = _vid.height;
            }
        );
    };
    
    
    //do something when stream is running
    $scope.onStream = function(stream) {
        
    };
    
    $scope.docList = [
        {name: "Dr. Albrecht", id: 1, busy: true},
        {name: "Dr. Bremer", id: 2, busy: false},
        {name: "Dr. Cristen", id: 3, busy: false}
    ];
    
    //change to assigned room upon button click
    $scope.goRoom= function(id) {
        var path = '#/room';
        //if (available){
           $location.path(path); 
           // available = !available;
        //}
        
    };
    
    $scope.message= "allo";
  });
