'use strict';

const events = require('../module/event.js');

events.on('success', payload => loggg('success', payload));
events.on('error', payload => loggg('error', payload));


function loggg(action, payload) {

  console.log('ooops')
  
  let message = `${action.toUpperCase()}`;
  console.log(message, payload);

};