'use strict';

/**
 * @ngdoc function
 * @name appPortalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appPortalApp
 */
angular.module('appPortalApp')
  .controller('MainCtrl',['$scope', function ($scope) {
       $scope.departments = [
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

      $scope.fetch = function(){
      	window.open('../../files/'+$scope.user.department+'.pdf','_blank');
      };
  }]);
