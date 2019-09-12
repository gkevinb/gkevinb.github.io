const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const del = require('del');

/*
Need done argument because it assumes the task is synchronous
*/
gulp.task('message', function(done){
    console.log('Gulp is runninng....');
    done();
});


// Copy ALL files
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

/* Copy all files in dist folder to project folder */
gulp.task('copy-dist', function(){
    return gulp.src('dist/**/*')
        .pipe(gulp.dest('./'))
});

gulp.task('clean', function(){
    return del(['js', 'css', 'img', 'files', 'database', 'index.html', 'favicon.ico'], {force:true});
});

gulp.task('deploy', gulp.series('clean', 'copy-dist'));

