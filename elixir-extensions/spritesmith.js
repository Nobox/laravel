var gulp = require('gulp'),
    spritesmith = require('gulp.spritesmith')
;

var Elixir = require('laravel-elixir'),
    Task   = Elixir.Task,
    $      = Elixir.Plugins,
    config = Elixir.config
;

Elixir.extend('spritesmith', function(src, output, options) {
    new Task('spritesmith', function() {
        var paths = new Elixir.GulpPaths()
            .src(src || '/sprite/*.png', config.assetsPath + '/img')
            .output(output || config.publicPath + '/img');

        // Fancy log
        this.log(paths.src.path, paths.output.baseDir);

        // Start stream
        var spriteData = gulp.src(paths.src.path)
            .pipe(spritesmith({
                cssName: '_tools.sprite.scss',
                imgName: 'sprite.png',
                imgPath: '/img/sprite.png',
                padding: 3,
                retinaImgName: 'sprite-2x.png',
                retinaImgPath: '/img/sprite-2x.png',
                retinaSrcFilter: [paths.src.baseDir + '/*-2x.png'],
            }));

        // Output sprite images
        spriteData.img
            .pipe(gulp.dest(paths.output.baseDir));

        // Output sprite stylesheet
        spriteData.css
            .pipe(gulp.dest(config.get('assets.css.sass.folder')));

        // Return stream for sequential order in Elixir mix
        return spriteData;
    })
    .watch(config.assetsPath + '/img/sprite/*.png');
});
