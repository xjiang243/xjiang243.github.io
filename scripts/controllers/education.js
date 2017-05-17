'use strict';

/**
 * @ngdoc function
 * @name footerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the footerApp
 */
angular.module('profile-App')
  .controller('EducationCtrl',['$scope', function ($scope) {
    var universities = [
        {
          name:'Illinois Institute of Technology',
          universitylogo: '../images/iit_logo.png',
          location:'Chicago, US',
          period:'2014-2016',
          degree:'Master of Science in Electrical Engineer',
          gpa:'3.68/4',
          website: 'http://web.iit.edu/'
        },
        {
          name:'Hainan University',
          universitylogo: '../images/Hainan_University_logo.png',
          location:'Haikou, China',
          period:'2009-2013',
          degree:'Bachelor of Communication Engineering',
          gpa:'81.6/100',
          website: 'http://www.hainu.edu.cn/guojiwenhua-en/'
        }
    ];

    $scope.universities = universities;
  }]);