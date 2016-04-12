var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    uglify       = require('gulp-uglify'),
    concat       = require('gulp-concat'),
    rename       = require('gulp-rename'),
    plumber      = require('gulp-plumber'),
    livereload   = require('gulp-livereload'),
    autoprefixer = require('gulp-autoprefixer');

gulp
    .task('stylesheets', () => {
        return gulp.src('app/stylesheets/app.scss')
            .pipe(plumber())
            .pipe(sass({
                outputStyle: 'compressed'
            }).on('error', sass.logError))
            .pipe(autoprefixer())
            .pipe(gulp.dest('public/stylesheets'))
            .pipe(livereload());
    })
    .task('scripts', () => {
        return gulp.src(['app/scripts/app.js'])
            .pipe(plumber())
            .pipe(concat('fuckbeards.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('public/scripts'))
            .pipe(livereload());
    })
    .task('watch', () => {
        livereload.listen();
        gulp.watch('app/scripts/**/*.js', ['scripts']);
        gulp.watch('app/stylesheets/**/*.scss', ['stylesheets']);
    })
    .task('default', ['stylesheets', 'scripts'])
    .task('dev', ['default', 'watch']);
