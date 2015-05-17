var elixir = require('laravel-elixir');
require('laravel-elixir-browserify').init('bundler');
require('laravel-elixir-imagemin');
require('./elixir-extensions/svg-sprite');

elixir(function(mix) {
    mix
        .sass('**/*.scss', null, {
            includePaths: ['./node_modules', elixir.config.bowerDir]
        })

        .bundler('entry.js', {
            debug: true,
            rename: 'bundle.js'
        })

        .imagemin()

        .svgSprite()

        .version([
            'css/styles.css',
            'js/bundle.js'
        ])

        .phpUnit()
    ;
});
