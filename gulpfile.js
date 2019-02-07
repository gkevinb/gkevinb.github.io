const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();


/* Template:
gulp.task('task_name', function(){
    // do something..
});

/*
    -- TOP LEVEL FUNCTIONS --
    gulp.task - Define tasks
    gulp.src - Point to files to use
    gulp.dest - Points to folder to output
    gulp.watch - Watch files and folders for changes

*/


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
        .pipe(gulp.dest('dist'))
});

gulp.task('copy-index', function(){
    console.log('Copying index.html to repo root directory because of Github Pages');
    console.log('Modify the sources in index.html to add /dist/ directory');
    return gulp.src('dist/index.html')
        .pipe(gulp.dest('./'))
});

// Copy ALL js files
// dist folder created automatically
gulp.task('copy-js', function(){
    return gulp.src('src/js/*')
        .pipe(gulp.dest('dist/js'))
});

// Copy ALL css files
// dist folder created automatically
gulp.task('copy-css', function(){
    return gulp.src('src/css/*')
        .pipe(gulp.dest('dist/css'))
});

// Image optimization
gulp.task('image-min', () =>
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);

// Javascript minifying
gulp.task('minify', () =>
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
);

// Combine and minify Javascript files
gulp.task('scripts', () =>
    gulp.src('js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'))
);


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
gulp.task('browser-sync', function() {
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
