'use strict';

/* Controllers */
var profileApp = angular.module('profileApp', []);

profileApp.controller('IndexController', ['$scope','$http', function($scope, $http) {
  console.log("hello from controller");
  $http.get('/personalDetails').success(function(data) {
      console.log("Received personalDetails from server." + data);
      $scope.personalDetails = data;
  });

  $http.get('/professionalSummary').success(function(data) {
    console.log("Received professionalSummary from server.");
    $scope.professionalSummary = data;
  });

  $http.get('data/workExperience.json').success(function(data) {
    $scope.workExperience = data;
  });

  $http.get('data/certification.json').success(function(data) {
    $scope.certification = data;
  });

  $http.get('data/education.json').success(function(data) {
    $scope.education = data;
  });

  $http.get('data/skills.json').success(function(data) {
    $scope.skills = data;
  });
}]);