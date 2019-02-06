var gulp = require('gulp');
var sass = require('gulp-sass');

/* Template:
gulp.task('task_name', function(){
    // do something..
});

*/
// Pipe is chain something together
/*
Returns scss file pipe it through sass and
*/

gulp.task('default', async function () {
    console.log('Hello Gulp!')
});

gulp.task('sass', function(){
    return gulp.src('scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
});
