//三方通用工具
var path=require('path');


var gulp=require('gulp');
var rev = require('gulp-rev')
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var minify = require('gulp-clean-css');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var revCollector = require('gulp-rev-collector');
var concat = require('gulp-concat');

var sync = require('browser-sync');
var mypack = require('webpack');
var webpack =require('webpack-stream');

//路径配置
var distPath='./public/dist';
var targetPath=distPath;

var srcPath='./public/src';
var fromPath=srcPath;

gulp.task('sass',function(){
    return gulp.src(fromPath+'/scss/*.scss')
    .pipe(sass({outputStyle:'compressed'}).on('error',sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions', 'last 1 version', 'iOS 7'],
        cascade:false
    }))
//  .pipe(rev())
//   .pipe(rev.manifest())
    .pipe(gulp.dest(targetPath+'/css'))
});
gulp.task('concat',function(){
    return gulp.src([fromPath+'/css/',fromPath+'/resource/css/*'])
    .pipe(concat('build.css'))
//  .pipe(rev())
//   .pipe(rev.manifest())
    .pipe(gulp.dest(targetPath+'/css')) 
})

gulp.task('begin',function(){
    return gulp.src([fromPath+'/'])
    .pipe(webpack(require('./webpack.config.js')))
//  .pipe(uglify())
//  .pipe(rev())
//  .pipe(rev.manifest())
    .pipe(gulp.dest(targetPath))
})

gulp.task('dev',['sass','begin','concat'],function(){
    gulp.watch(fromPath+'/scss/**',['sass']);
//  return gulp.src([fromPath+'/rev-manifest.json',fromPath+'/index.html'])
//  .pipe(revCollector({
//      replaceReved:true
//  }))
//  .pipe(gulp.dest(targetPath))
})
