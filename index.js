'use strict';

let nlp = require('nlp_compromise');

log(nlp.noun('coder').pluralize());
log('-------------------------------------');
log(nlp.verb('code').conjugate());
log('-------------------------------------');
log(nlp.statement('He writes good code').negate().text());
log('-------------------------------------');
log(nlp.sentence('I fixed the tire').replace('the [Noun]', 'the code').text());
log('-------------------------------------');
log(nlp.text('Dave Collier did a dance').people());
log('-------------------------------------');

function log(str) {
  console.log(str);
}
