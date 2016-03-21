'use strict';

/* Controllers */
var profileApp = angular.module('profileApp', []);

profileApp.controller('IndexController', function($scope, $http) {

  $http.get('data/personalDetails.json').success(function(data) {
    $scope.personalDetails = data;
  });

  $http.get('data/professionalSummary.json').success(function(data) {
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
});