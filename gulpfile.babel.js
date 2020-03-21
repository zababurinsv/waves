import gulp from 'gulp';
import sass from "gulp-sass";
import node from 'node-sass';
import autoprefixer from "gulp-autoprefixer";
import replace from './gulp-modules/replace.js'
import {exec} from "child_process";
import minify from "gulp-minify";
import del from "del";

sass.compiler = node
function callback(error, data) {
    console.log(error);
    console.log(data);
}
gulp.task('sass', function () {
    return gulp.src('./docs/static/html/components/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('./docs/static/html/components/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./docs/static/html/components/**/*.scss', gulp.series('sass'));
});

gulp.task('gulp.build', function (cb) {
    exec('npm run build', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task(`gulp.replace`, function () {
    return  gulp.src(`./temp/waves.mjs`)
        .pipe(replace('','', callback))
        .pipe(gulp.dest(`./temp`));
});

gulp.task('gulp.minify', function() {
    return  gulp.src(['./temp/waves.mjs'])
        .pipe(minify({
            ext:{
                src:'-origin.mjs',
                min:'.mjs'
            },
            noSource: true
        }))
        .pipe(gulp.dest('./docs/static/html/components/component_modules/bundle/waves'))
});

gulp.task('gulp.remove.temp', function(){
        return del('./temp', {force:true});
    });

gulp.task('gulp-bundle-waves', gulp.series('gulp.build', 'gulp.replace', 'gulp.minify', 'gulp.remove.temp'))
gulp.task('gulp-watch-slyle', gulp.series('sass','sass:watch'))
gulp.task('default', gulp.parallel('gulp-watch-slyle', 'gulp-bundle-waves'))