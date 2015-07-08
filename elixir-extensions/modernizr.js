var gulp = require('gulp'),
    elixir = require('laravel-elixir'),
    config = elixir.config,
    uglify = require('gulp-uglify'),
    modernizr = require('gulp-modernizr')
;

elixir.extend('modernizr', function(options) {
    gulp.task('modernizr', function() {
        gulp.src([
                config.jsOutput + '/**/*.js',
                '!' + config.jsOutput + '/modernizr-custom.js',
                config.cssOutput + '/**/*.css'
            ])
            .pipe(modernizr('modernizr-custom.js', options))
            .pipe(uglify())
            .pipe(gulp.dest(config.jsOutput + '/vendor'))
    });

    return this.queueTask('modernizr');
});
