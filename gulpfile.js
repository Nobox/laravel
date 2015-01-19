var elixir = require('laravel-elixir'),
    to5ify = require('6to5ify')
;

require('laravel-elixir-browserify');
require('laravel-elixir-svg-symbols');

elixir(function(mix) {
    mix
        .sass('**/*.scss', null, {
            includePaths: [elixir.config.bowerDir]
        })

        .browserify('app.js', 'public/js', {
            transform: [to5ify]
        })

        .svgSymbols({
            outputDir: 'public/svg',
            rename: 'symbols',
            templates: ['default-svg']
        })

        .version('css/styles.css')
        .version('js/app.js')
        .version('img/*.{png, jpg, jpeg}')

        .phpUnit()
    ;
});
