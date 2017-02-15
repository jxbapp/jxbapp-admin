'use strict';

// gulp 基础包 和 gulp常用插件包
const gulp = require('gulp');

const less = require('gulp-less');

const cleanCss = require('gulp-clean-css');

const uglify = require('gulp-uglify');

const rename = require('gulp-rename');

const path = require('path');

// 用于错误通知
const notify = require("gulp-notify");

// 错误处理
let handlerError = function () {

    var args = Array.prototype.slice.call(arguments);

    notify.onError({
        title: 'compile error',
        message: '<%=error.message %>'
    }).apply(this, args);

    //替换为当前对象
    this.emit(); //提交
};

var src = path.join('./', 'src');
var dist = path.join('./', 'dist');

let file = 'less/jxbapp-admin.less';

gulp.task('release',  () =>
     gulp.src(file)
        .pipe(less())
        .on('error',handlerError)
        .pipe(cleanCss({ keepSpecialComments: 1 }))
        .pipe(gulp.dest(dist))
);
