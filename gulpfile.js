var Elixir = require('laravel-elixir'),
    config = Elixir.config
;
require('./elixir-extensions/svg-sprite');
require('./elixir-extensions/modernizr');

// Add IE9 support to autoprefixer.
config.css.autoprefix.options = [{
    browsers: ['last 2 versions', 'ie 9'],
    cascade: false
}];

// Enable watchify polling for our NFS-mounted VMs.
config.js.browserify.watchify.options.poll = true;

// Mix
Elixir(function(mix) {
    mix
        .sass('styles.scss', null, {
            includePaths: ['./node_modules', config.bowerDir]
        })

        .browserify('entry.js', config.get('public.js.outputFolder') + '/bundle.js')

        .svgSprite()

        .modernizr(null, null, {
            excludeTests: ['hidden'],
            options: ['setClasses', 'prefixed', 'testStyles']
        })

        .version([
            config.publicPath + '/css/styles.css',
            config.publicPath + '/js/bundle.js',
            config.publicPath + '/svg/sprite.symbol.svg'
        ])
    ;
});
