'use strict';
import './scss/styles.scss';
import Controller from './js/controller.class.js';
(function(){
  let controller = new Controller();
  document.getElementById('clear-services-btn').addEventListener('click', function(){
    document.getElementById('npo-results').className = '';
    controller.loadDefault(controller);
    controller.geocoder.form.reset();
  });
})(window);
