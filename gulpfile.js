'use strict';

var elixir = require('laravel-elixir'),
    babelify = require('babelify')
;

require('laravel-elixir-browserify');
require('laravel-elixir-svg-symbols');
require('laravel-elixir-imagemin');

elixir(function(mix) {
    mix
        .sass('**/*.scss', null, {
            includePaths: [elixir.config.bowerDir]
        })

        .browserify('bootstrap.js', {
            debug: true,
            transform: [babelify],
            rename: 'app.js'
        })

        .svgSymbols({
            outputDir: 'public/svg',
            rename: 'symbols',
            templates: ['default-svg']
        })

        .imagemin()

        .version([
            'css/styles.css',
            'js/app.js',
            'img/*'
        ])

        .phpUnit()
    ;
});
