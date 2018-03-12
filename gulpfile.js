// include modules
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    babelify = require('babelify'),
    buffer = require('vinyl-buffer'),
    browserify = require('browserify'),
    browserSync = require('browser-sync').create(),
    cleanCSS = require('gulp-clean-css'),
    htmlmin = require('gulp-htmlmin'),
    jest = require('gulp-jest').default,
    rename = require('gulp-rename'),
    runSequence = require('run-sequence'),
    sass = require('gulp-sass'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    vueify = require('gulp-vueify');
	
// js
gulp.task('js', function()
{
    return browserify({
            entries: ['./_js/script.js']
        })
        .transform(babelify.configure({
            presets : ['es2015', 'es2017'],
            plugins : ['transform-runtime']
        }))
        .bundle()
        .on('error', function(err) { console.log(err.toString()); this.emit('end'); })
        .pipe(source('hlp.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('.'))
        .pipe(browserSync.reload({stream: true}));
});

// tests
gulp.task('js-test-babel', function()
{
    return browserify({
            entries: ['./_tests/_js/script.js']
        })
        .transform(babelify.configure({
            presets : ['es2015', 'es2017'],
            plugins : ['transform-runtime']
        }))
        .bundle()
        .on('error', function(err) { console.log(err.toString()); this.emit('end'); })
        .pipe(source('bundle.test.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./_tests/_build'));
});
gulp.task('js-test-jest', function()
{   
    return gulp
        .src('_tests/_build')
        .pipe(jest({
            'preprocessorIgnorePatterns': [
                '<rootDir>/dist/', '<rootDir>/node_modules/'
            ],
            'automock': false
        }));
});
gulp.task('js-test', function()
{
    return runSequence('js-test-babel','js-test-jest');
});

// watch
gulp.task('watch', function()
{
    gulp.watch('./_js/*.js', function()
    {
        runSequence('js','js-test');
    });  
    gulp.watch('./_tests/_js/*.js', function()
    {
        runSequence('js-test');
    });
});

// default
gulp.task('default', ['js','js-test','watch']);