var gulp      = require('gulp'),
    modernizr = require('gulp-modernizr')
;

var Elixir = require('laravel-elixir')
      Task = Elixir.Task,
         $ = Elixir.Plugins,
    config = Elixir.config
;

Elixir.extend('modernizr', function(src, output, options) {
    var paths = {
        src: src || [
            config.get('public.js.outputFolder') + '/**/*.js',
            '!' + config.get('public.js.outputFolder') + '/vendor/modernizr-custom.js',
            config.get('public.css.outputFolder') + '/**/*.css'
        ],
        output: output || config.get('public.js.outputFolder') + '/vendor'
    };

    new Task('modernizr', function() {
        return gulp.src(paths.src)
            .pipe(modernizr('modernizr-custom.js', options || {}))
            .pipe($.if(config.production, $.uglify()))
            .pipe(gulp.dest(paths.output));
    });
});
