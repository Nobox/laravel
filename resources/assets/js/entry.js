import $ from 'jquery';
import attachFastClick from 'fastclick';
import svg4everybody from 'svg4everybody';
import loadJS from './lib/loadJS';
import App from './app';

// Disable touch events 300ms delay
attachFastClick(document.body);

// Enable external content for SVGs
svg4everybody();

// Download matchMedia polyfill only if necessary
if (window.matchMedia === undefined) {
    loadJS('bower_components/matchmedia/matchMedia.js', function() {
        loadJS('bower_components/matchmedia/matchMedia.addListener.js');
    });
}

// HTML5 input placeholder polyfill
if (! Modernizr.placeholder) {
    loadJS('bower_components/jquery-placeholder/jquery.placeholder.min.js', function() {
        $('input, textarea').placeholder();
    });
}

// HTML5 <picture>, srcset and sizes polyfill
if (! Modernizr.srcset || ! Modernizr.sizes) {
    loadJS('bower_components/picturefill/dist/picturefill.min.js');
}

// Initialize app
var app = new App();
app.init();
