'use strict';

/**
 * @ngdoc overview
 * @name footerApp
 * @description
 * # footerApp
 *
 * Main module of the application.
 */
angular
  .module('profile-App', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/experience', {
        templateUrl: 'views/experience.html',
        controller: 'ExperienceCtrl',
        controllerAs: 'experience'
      })
      .when('/education',{
        templateUrl: 'views/education.html',
        controller: 'EducationCtrl',
        controllerAs: 'education'
      })
      .when('/certifications',{
        templateUrl: 'views/certifications.html',
        controller: 'CertificationsCtrl',
        controllerAs: 'certifications'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
