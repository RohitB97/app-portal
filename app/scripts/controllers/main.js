'use strict';

/**
 * @ngdoc function
 * @name appPortalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appPortalApp
 */
angular.module('appPortalApp')
  .controller('MainCtrl',['$scope','$http','Upload','cloudinary','$location',function ($scope,$http,$upload,cloudinary,$location) {
       $scope.applications = [
       'Web&MobileOps_Coordinator',
       'Sponsorship&PR_PR_Strategist',
       'Sponsorship&PR_Coordinator',
       'Sponsorship&PR_Creative',
       'Marketing&Sales_Coordinator',
       'Marketing&Sales_DeputyCoord',
       'Design_SuperCoord',
       'Design_Coordinator',
       'Media_Photography_SuperCoord',
       'Media_Videography_SuperCoord',
       'Media_Photography_Coord',
       'Media_Videography_Coord',
       'Media_Audiography_Coord',
       'Ambience_SuperCoord',
       'Ambience_Coordinator',
       'Proshows_Coordinator',
       'Proshows_DeputyCoord',
       'QMS_Analytics_Head',
       'QMS_Event_Manager',
       'QMS_Department_Manager',
       'Hospitality_SuperCoord',
       'Hospitality_Manager',
       'Hospitality_Coordinator',
       'Publicity_Strategist',
       'Publicity_Coordinator',
       'Finance_PPM_Coordinator',
       'Finance_Catering_Coordinator',
       'Finance_Manager',
       'FR_SuperCoord',
       'FR_Coordinator',
       'Safety_Security_Coordinator'
      ];

      $scope.departments=[
        'Events',
        'Web and Mobile Operations',
        'Hospitality',
        'Spons',
        'Proshows',
        'Facilities',
        'Design and Media',
        'Marketing and Sales',
        'Publicity',
        'Finance',
        'QMS',
        'Safety and Security'
      ];

      $scope.shootNew = function(){
            window.open('https://docs.google.com/spreadsheets/d/11vvv3GLV2Pozt9IfOYhU9krD-YPQAqbc91kodcvJVXA/edit#gid=0','_blank');
      };

      $scope.shootOld = function(){
            window.open('https://docs.google.com/spreadsheets/d/1VD737h2Pk5jDa7rqDfRNF0CjIgAwASoYymh3OvQQNCY/edit#gid=1651735497','_blank');
      };

      $scope.fetch = function(){
      	window.open('files/'+$scope.user.application+'.pdf','_blank');
      };

      $scope.uploadFiles = function(file){      
      var d = new Date();      
      $scope.file = file;
      if (!$scope.file) alert("Please Upload the file");

        if (file && !file.$error && $scope.user) {
          $scope.status = true;
            
          file.upload = $upload.upload({
            url: "https://api.cloudinary.com/v1_1/gallerysaarang/upload",
            data: {
              upload_preset: "applications",
              tags: 'saarang2018-apps',
              context: 'photo=' + $scope.title,
              file: file
            }
          }).progress(function (e) {
            file.progress = Math.round((e.loaded * 100.0) / e.total);
            $scope.progress = "Uploading... " + file.progress + "%";
          }).success(function (data, status, headers, config) {
            data.context = {custom: {photo: $scope.title}};
            file.result = data;
            $scope.user.app_link = file.result.url;
            var data_user = {
                 "type":"insert",
                 "args": {
                    "table":"applicants",
                    "objects": [{
                      "name":$scope.user.name,
                      "department":$scope.user.department,
                      "roll_no":$scope.user.roll_no,
                      "app_link":$scope.user.app_link,
                      "position":$scope.user.position,
                      "uploaded_at": d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear() + " - " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
                  }]
                }
            };

            $http.post('https://data.saarang.org/v1/query',data_user).then(function(){
             console.log("row inserted");
             alert('Successfully Submitted! All the best for the interview :)');
              location.reload();     //refreshing the page after the upload
             }).catch(function(err){
                 console.log(err);
            });
          }).error(function (data, status, headers, config) {
            file.result = data;
          });
        }

        else {
          alert('Please fill the details');
          location.reload();
        } 
      };
  }]);
