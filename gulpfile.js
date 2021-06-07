const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('sync', function () {
    browserSync.init({
        proxy: "my_project.dev",
        files: "*.css,*.php,css/*css"
    });
});

function defaultTask(cb) {
    // place code for your default task here
    cb();
}

exports.default = defaultTask
