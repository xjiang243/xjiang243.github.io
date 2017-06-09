'use strict';

/**
 * @ngdoc function
 * @name footerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the footerApp
 */
angular.module('profile-App')
  .controller('CertificationsCtrl',['$scope', function ($scope) {
    var certificationpair = [
      [{
          name: " Angular2(or4)&NodeJS-The Practical MEAN Stack Guide",
          img: "../images/udemy3.png",
          link: "https://www.udemy.com/certificate/UC-IDS9PXAF/"
       },
       {
          name: "The Complete Node.js Developer Course (2nd Edition)",
          img: "../images/udemy2.png",
          link: "https://www.udemy.com/certificate/UC-X5INPDBW/"
       }
      ],

      [{
          name: "The Full Stack Web Development",
          img: "../images/udemy1.png",
          link: "https://www.udemy.com/certificate/UC-FZM2CHS9/"
       },
       {
          name: "Server-side Development with NodeJS",
          img: "../images/cert5.png",
          link: "https://www.coursera.org/account/accomplishments/certificate/JEVXCFTRKKEY"
       }],
       
       [{
          name: "Multiplatform Mobile App Development with Web Technologies",
          img: "../images/cert4.png",
          link:"https://www.coursera.org/account/accomplishments/certificate/3X36RH5DRPZ8"
       },
       {
          name: "Front-End JavaScript Frameworks: AngularJS",
          img: "../images/cert3.png",
          link: "https://www.coursera.org/account/accomplishments/certificate/APJVWHNUYRBY"
       }],

       [{
          name: "Front-End Web UI Frameworks and Tools",
          img: "../images/cert2.png",
          link: "https://www.coursera.org/account/accomplishments/certificate/6TYTQWZ8VUTV"
       },
       {
          name: "HTML, CSS and JavaScript",
          img: "../images/cert1.png",
          link: "https://www.coursera.org/account/accomplishments/certificate/SQYFLFMMJA35"
       }]
    ];

    $scope.certificationpair = certificationpair;
  }]);