'use strict';

var nlp = require('nlp_compromise');
var angular = require('angular');
require('angular-material');

angular.module('nlpApp', ['ngMaterial'])
  .controller('AppController', ['$scope', function($scope) {
    $scope.verb = {
      conjugate: {},
      past : null,
      present : null,
      to_future : null
    };

    $scope.results = {
      conjugate: {},
      past : null,
      present : null,
      to_future : null
    };

    $scope.$watch('verb', function(newVal, oldVal){
      if ($scope.verb.conjugate == true) {
        $scope.results.conjugate = conjugate();
      }
      if ($scope.verb.to_past == true) {
        $scope.results.past = toPast();
      }
      if ($scope.verb.to_present == true) {
        $scope.results.present = toPresent();
      }
      if ($scope.verb.to_future == true) {
        $scope.results.future = toFuture();
      }
      console.log('verb: ', $scope.verb);
      console.log('results: ', $scope.results);
    }, true);

    function conjugate () {
        return nlp.verb($scope.verb.input).conjugate();
    }

    function toPast () {
        return nlp.verb($scope.verb.input).to_past();
    }

    function toPresent () {
        return nlp.verb($scope.verb.input).to_present();
    }

    function toFuture () {
        return nlp.verb($scope.verb.input).to_future();
    }

  }]);
