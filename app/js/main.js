'use strict';
import Controller from './controller.class.js';
(function(){
  let controller = new Controller({
    styleURL: 'mapbox://styles/mapbox',
    mapContainer: 'map',
    geocoder: true,
    controls: false,
    draw: false,
    baseLayers: {
      street: 'streets-v10',
      satellite: 'cj774gftq3bwr2so2y6nqzvz4'
    },
    center: [-83.10, 42.36],
    zoom: 10.75,
    boundaries: {
      sw: [-83.3437,42.2102],
      ne: [-82.8754,42.5197]
    },
    sources: [],
    layers: []
  });
  document.getElementById('clear-services-btn').addEventListener('click', function(){
    document.getElementById('npo-results').className = '';
    document.querySelector('.mapboxgl-ctrl-geocoder.mapboxgl-ctrl input').value = '';
    document.querySelector('button.geocoder-icon.geocoder-icon-close').style.display = 'none';
    controller.loadDefault(controller);
  });
})(window);
