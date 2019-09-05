const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const minify = require('gulp-minify');
const inject = require('gulp-inject');
const browserSync = require('browser-sync').create();
const del = require('del');

/*
Need done argument because it assumes the task is synchronous
*/
gulp.task('message', function(done){
    console.log('Gulp is runninng....');
    done();
});

// Copy ALL HTML files
// dest folder created automatically
gulp.task('copy-html', function(){
    return gulp.src('src/*.html')
        .pipe(gulp.dest('./'))
});

// Copy ALL js files
// dest folder created automatically
gulp.task('copy-js', function(){
    return gulp.src('src/js/*')
        .pipe(gulp.dest('js'))
});

// Copy ALL css files
// dest folder created automatically
gulp.task('copy-css', function(){
    return gulp.src('src/css/*')
        .pipe(gulp.dest('css'))
});

// Copy ALL css files
// dest folder created automatically
gulp.task('copy-files', function(){
    return gulp.src('src/files/**/*')
        .pipe(gulp.dest('files'))
});

// Image optimization
gulp.task('image-min', () =>
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img'))
);

// Javascript minifying
gulp.task('scripts', () => {
    return gulp.src('src/js/*.js')
        .pipe(minify({
            ext:{
                min:'.js'
            },
            noSource: true,
        }))
        .pipe(gulp.dest('js'))
});

// Pipe is chain something together
/*
Returns SCSS file pipe it through sass and
*/
gulp.task('sass', function(){
    return gulp.src('src/scss/main.scss')
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

/*
Inject CSS into HTML
Later also inject Javascript
*/
gulp.task('inject-index', function () {
    // var target = gulp.src('./src/index.html');
    // // It's not necessary to read the files (will speed up things), we're only after their paths:
    // var sources = gulp.src(['./src/css/*.css'], {read: false}, {relative: true} );

    // return target.pipe(inject(sources))
    //     .pipe(gulp.dest('./src'));

    // Pipe relative path
    return gulp.src('./src/*.html')
        .pipe(inject(gulp.src('./src/css/*.css', {read: false}), {relative: true}))
        .pipe(gulp.dest('./src'));
});

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });
    
    // Make broswer sync on change in SASS and CSS
    gulp.watch("src/scss/*.scss", gulp.series('sass'));
    // gulp.watch("src/*.html", gulp.series('inject-index'));
    gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch("src/js/*.js").on('change', browserSync.reload);
});

// Watch can be called here separately, but it is called when gulp browser sync is started
gulp.task('watch', function(){
    // Watch all javascript files and if changes occure run scripts tasks
    gulp.watch('src/scss/*', gulp.series('sass'));
	//gulp.watch('src/*.html', gulp.series('copy-html'));
});

/* Copy all files in dist folder to project folder */
gulp.task('copy-dist', function(){
    return gulp.src('dist/**/*')
        .pipe(gulp.dest('./'))
});

gulp.task('clean', function(){
    return del(['js', 'css', 'img', 'files', 'index.html', 'favicon.ico'], {force:true});
});

gulp.task('deploy', gulp.series('clean', 'copy-dist'));

gulp.task('default', gulp.series('image-min', 'sass', 'scripts', 'inject-index', 'copy-html', 'copy-css', 'copy-files'));
