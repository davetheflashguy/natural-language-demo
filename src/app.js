'use strict';

var nlp = require('nlp_compromise');
var angular = require('angular');
require('angular-material');

angular.module('nlpApp', ['ngMaterial'])
  .controller('AppController', ['$scope', function($scope) {
    function log(str) {
      console.log(str);
    }

    $scope.pluralize = function(noun) {
      return (typeof(noun) !== 'undefined') ? nlp.noun(noun).pluralize() : '';
    }

    function conjugate(verb) {
      return nlp.verb(verb).conjugate();
    }

    function negate(statement) {
      return nlp.statement(statement).negate().text();
    }

    function people(text) {
      return nlp.text(text).people();
    }

    function init() {
      log(pluralize('coder'));
      log('-------------------------------------');
      log(conjugate('code'));
      log('-------------------------------------');
      log(negate('Dave writes good code'));
      log('-------------------------------------');
      log(people('Dave did a funky dance'));
    }

  }]);
