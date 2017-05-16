'use strict';

/**
 * @ngdoc function
 * @name footerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the footerApp
 */
angular.module('profile-App')
  .controller('MainCtrl',['$scope', function ($scope) {
    var programminglanguage = [
      'JAVA',
      'PHP',
      'Javascript',
      'HTML',
      'CSS',
      'SQL',
      'JQuery',
      'Python',
      'C++'
    ];

    var tools = [
    	'Sublime',
    	'Eclipse',
    	'Brackets',
    	'Git',
    	'GitHub',
    	'Grunt',
    	'Gulp',
    	'Sass',
    	'Jade',
    	'JIRA'
    ];

    var frames = [
    	'AngularJS',
    	'NodeJS',
    	'Express',
    	'Bootstrap',
    	'MySQL',
    	'MongoDB',
    	'Selenium',
    	'testNG',
    	'J-Unit'
    ];

 	$scope.programminglanguage = programminglanguage;
 	$scope.tools = tools;
 	$scope.frames = frames;
  }]);