import attachFastClick from 'fastclick';
import svg4everybody from 'svg4everybody';

// Disable touch events 300ms delay
attachFastClick(document.body);

// Enable external content for SVGs
svg4everybody();
