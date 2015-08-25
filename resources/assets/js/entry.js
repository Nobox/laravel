import attachFastClick from 'fastclick';
import svg4everybody from 'svg4everybody';
import loadJS from './lib/loadJS';

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
