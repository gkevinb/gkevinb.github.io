const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();


/*
Need done argument because it assumes the task is synchronous
*/
gulp.task('message', function(done){
    console.log('Gulp is runninng....');
    done();
});

// Copy ALL HTML files
// dist folder created automatically
gulp.task('copy-html', function(){
    return gulp.src('src/*.html')
        .pipe(gulp.dest('./'))
});

// Copy ALL js files
// dist folder created automatically
gulp.task('copy-js', function(){
    return gulp.src('src/js/*')
        .pipe(gulp.dest('js'))
});

// Copy ALL css files
// dist folder created automatically
gulp.task('copy-css', function(){
    return gulp.src('src/css/*')
        .pipe(gulp.dest('css'))
});

// Image optimization
gulp.task('image-min', () =>
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img'))
);

// // Javascript minifying
// gulp.task('minify', () =>
//     gulp.src('js/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('dist'))
// );

// // Combine and minify Javascript files
// gulp.task('scripts', () =>
//     gulp.src('js/*.js')
//         .pipe(concat('main.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/'))
// );


// Pipe is chain something together
/*
Returns scss file pipe it through sass and
*/
gulp.task('sass', function(){
    return gulp.src('src/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
});

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });
});

gulp.task('watch', function(){
    // Watch all javascript files and if changes occure run scripts tasks
    gulp.watch('src/img/*', gulp.series('image-min'));
	gulp.watch('src/*.html', gulp.series('copyHtml'));
});

gulp.task('default', gulp.series('message', 'image-min', 'sass', 'copy-html', 'copy-js', 'copy-css'));
