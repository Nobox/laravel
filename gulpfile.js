var elixir = require('laravel-elixir');
require('laravel-elixir-browserify').init('bundler');
require('laravel-elixir-svg-symbols');
require('laravel-elixir-imagemin');

elixir(function(mix) {
    mix
        .sass('**/*.scss', null, {
            includePaths: ['./node_modules', elixir.config.bowerDir]
        })

        .bundler('entry.js', {
            debug: true,
            transform: ['babelify'],
            rename: 'bundle.js'
        })

        .svgSymbols({
            outputDir: 'public/svg',
            rename: 'symbols',
            templates: ['default-svg']
        })

        .imagemin()

        .version([
            'css/styles.css',
            'js/bundle.js'
        ])

        .phpUnit()
    ;
});
