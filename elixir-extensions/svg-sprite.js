var gulp          = require('gulp'),
    svgSprite     = require('gulp-svg-sprite')
;

var Elixir = require('laravel-elixir'),
    Task   = Elixir.Task,
    config = Elixir.config
;

/*
 |----------------------------------------------------------------
 | SVG Sprite
 |----------------------------------------------------------------
 |
 | This task passes individual SVG files
 | through svg-sprite.
 |
 | @see https://github.com/jkphl/svg-sprite
 */

Elixir.extend('svgSprite', function(baseDir, output, options) {
    var options = options || {
            mode: {
                symbol: {
                    dest: '.'
                }
            }
        },
        paths = new Elixir.GulpPaths()
            .src('**/*.svg', baseDir || config.assetsPath + '/svg')
            .output(output || config.publicPath)
    ;

    new Task('svgSprite', function() {
        this.log(paths.src, paths.output);

        return gulp.src(paths.src.path)
            .pipe(svgSprite(options))
            .on('error', function(e) {
                new Elixir.Notification().error(e, 'SVG sprites creation failed');

                this.emit('end');
            })
            .pipe(gulp.dest(paths.output.baseDir))
            .pipe(new Elixir.Notification('SVG sprites generated'))
    })
    .watch(paths.src.path)
    .ignore(paths.output.baseDir);
});
