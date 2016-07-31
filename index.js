'use strict';

let nlp = require('nlp_compromise');
let angular = require('angular');

function log(str) {
  console.log(str);
}

function pluralize(noun) {
  return nlp.noun(noun).pluralize();
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

init(); // start
