var elixir = require('laravel-elixir');
require('laravel-elixir-imagemin');
require('./elixir-extensions/svg-sprite');

// Configure autoprefixer
elixir.config.autoprefixerOptions = [{
    browsers: ['last 2 versions', 'ie 9'],
    cascade: false
}];

elixir(function(mix) {
    mix
        .sass('styles.scss', elixir.config.cssOutput + '/styles.css', {
            includePaths: ['./node_modules', elixir.config.bowerDir]
        })

        .browserify('entry.js', elixir.config.jsOutput + '/bundle.js')

        .imagemin()

        .svgSprite()

        .version([
            'css/styles.css',
            'js/bundle.js'
        ])

        .phpUnit()
    ;
});
