import gulp from 'gulp';
import sass from 'gulp-sass';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import plumber from 'gulp-plumber';
import livereload from 'gulp-livereload';
import autoprefixer from 'gulp-autoprefixer';

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
            .pipe(babel({
              presets: ['es2015']
            }))
            .pipe(concat('mg.min.js'))
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
