const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const del = require('del');
const exec = require('child_process').exec;
const jsonminify = require('gulp-jsonminify');
 

/*
Need done argument because it assumes the task is synchronous
*/
gulp.task('message', function (done) {
    console.log('Gulp is running....');
    done();
});

/* Run `npm run build` command inside gulp */
gulp.task('build', function (cb) {
    exec('npm run build', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

/* Minify JSON files */
gulp.task('minify-json', function () {
    return gulp.src(['dist/database/*.json'])
        .pipe(jsonminify())
        .pipe(gulp.dest('dist/database/'));
});

// Copy ALL files
// dest folder created automatically
gulp.task('copy-files', function () {
    return gulp.src('src/files/**/*')
        .pipe(gulp.dest('files'))
});

// Image optimization
gulp.task('image-min', () =>
    gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('img'))
);

/* Copy all files in dist folder to project folder */
gulp.task('copy-dist', function () {
    return gulp.src('dist/**/*')
        .pipe(gulp.dest('./'))
});

gulp.task('clean', function () {
    return del(['js', 'css', 'img', 'files', 'database', 'index.html', 'favicon.ico'], {
        force: true
    });
});

gulp.task('deploy', gulp.series('build', 'minify-json', 'clean', 'copy-dist'));