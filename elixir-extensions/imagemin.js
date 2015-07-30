var gulp     = require('gulp'),
    pngquant = require('imagemin-pngquant'),
    optipng  = require('imagemin-optipng'),
    mozjpeg  = require('imagemin-mozjpeg')
;

var Elixir = require('laravel-elixir'),
    Task   = Elixir.Task,
    $      = Elixir.Plugins,
    config = Elixir.config
;

Elixir.extend('imagemin', function(src, output, options) {
    new Task('imagemin', function() {
        var paths = new Elixir.GulpPaths()
            .src(src || config.assetsPath + '/img')
            .output(output || config.publicPath + '/img');

        // Fancy paths log
        this.log(paths.src.path, paths.output.path);

        // Error handler
        var errorHandler = function(e) {
            new Elixir.Notification().error(e, 'ImageMin failed!');
            this.emit('end');
        };

        return gulp.src(paths.src.path)
            .pipe(pngquant(options)())
            .on('error', errorHandler)
            .pipe(optipng(options)())
            .on('error', errorHandler)
            .pipe(mozjpeg(options)())
            .on('error', errorHandler)
            .pipe(gulp.dest(paths.output.baseDir))
    })
    .watch(config.assetsPath + '/img/**/*')
});
