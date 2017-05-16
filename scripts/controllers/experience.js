'use strict';

/**
 * @ngdoc function
 * @name footerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the footerApp
 */
angular.module('profile-App')
  .controller('ExperienceCtrl',['$scope', function ($scope) {
    var experiences = [
    	{
    	companylogo: '../images/rdi_logo.png',
    	company: 'RDI Software',
    	title: 'Software Engineer',
    	location: 'Oak Brook, IL',
    	period: 'Aug.2016-present',
    	description:[
			'Used HTML5, Javascript, CSS and JQuery to develop front-end website with Bootstrap.',
			'Implement routes to add new features based on Node.js to communicate with client side.',
			'Used relational Database MySQL with PHP to implement CRUD functions.', 
			'Used Selenium and testNG framework to develop unit-testing scripts by programming in Java.',
			'Used Git to implement the version control during the development procedure.'
    	]},
    	{
		companylogo: '../images/moto_logo.png',
    	company: 'Motorola Mobility LLC',
    	title: 'Software Engineer',
    	location: 'Chicago, IL',
    	period: 'Jun.2015-Dec.2015',
    	description:[
				'Developed single page applications (SPA) by using the MEAN Stack and MVC framework.',
				'Used Node.js to develop web-server, implement business logical and access database.',
				'Used RESTful APIs to communicate with NoSQL database MongoDB.',
				'Used Grunt to compile process code and eliminate redundant tasks.',
				'Used Selenium and Junit framework to develop unit-testing scripts by programming in Java.',
				'Responsible for finding critical defects in web and software, reporting it through JIRA for tracking purpose.'
    	]},
    	{
    	companylogo: '../images/digital_china_logo.png',
    	company: 'Shenzhou Digital Information Service Co., Ltd.',
    	title: 'Software Developer',
    	location: 'Suzhou, China',
    	period: 'Jan.2013 - Jul.2014 ',
    	description:[
				'Developed front-end web and android application for National Procuratorial Department.',
				'Used Java and Android SDK to develop Android application.',
				'Parsed the JSON file from the database to make it readable by the client on front-end side.',
				'Coordinated with teammates and worked in Agile development method.'

    	]
    	}

    	];

    $scope.experiences = experiences;
  }]);
