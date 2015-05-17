var gulp          = require('gulp'),
    svgSprite     = require('gulp-svg-sprite'),
    elixir        = require('laravel-elixir'),
    Notification  = require('laravel-elixir/ingredients/commands/Notification'),
    utilities     = require('laravel-elixir/ingredients/commands/Utilities'),
    _             = require('underscore')
;

elixir.extend('svgSprite', function(options) {
    var config = this,
        defaultOptions = {
            dest: 'public',
            srcDir: config.assetsDir + 'svg',
            mode: {
                symbol: {
                    dest: '.'
                }
            }
        }
    ;

    options = _.extend(defaultOptions, options);

    var onError = function(e) {
        new Notification().error(e, 'SVG sprite sheet creation failed');

        this.emit('end');
    };

    gulp.task('svgSprite', function() {
        return gulp.src(config.assetsDir + '/**/*.svg')
            .pipe(svgSprite(options))
            .on('error', onError)
            .pipe(gulp.dest(options.dest))
            .pipe(new Notification().message('SVG sprite sheet created'));
    });

    this.registerWatcher('svgSprite', options.srcDir + '/**/*.svg');

    return this.queueTask('svgSprite');
});
