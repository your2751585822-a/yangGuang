const gulp = require("gulp")
const htmlmin = require("gulp-htmlmin")
const cssmin = require("gulp-cssmin")
const { src } = require("gulp")

let  copyFile=()=>{
    return watch("./client",()=>{
        return gulp.src("./client/css/*").pipe(dest("./build/css"))
    })
    // return src("./client/css/*").pipe(dest("./build/css"))
}
exports.copyFile = copyFile

let htmlminTask = ()=>{
    var options={
        removeComments: true, //清除HTML注释
        collapseWhitespace: true, //压缩HTML
        collapseBooleanAttributes: false, //省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: false, //删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
        minifyJS: true, //压缩页面JS
        minifyCSS: true //压缩页面CSS
    }
    return gulp.src("./client/index.html").pipe(htmlmin(options)).pipe(dest("./build"))
}
exports.htmlminTask = htmlminTask

let cssminTask =()=>{
    return gulp.src("./client/css/reset.css").pipe(cssmin()).pipe(dest("./build/css"))
}
exports.cssminTask = cssminTask

let watchFile = ()=>{
    return watch("./client",()=>{
        return gulp.src("./client/*.html").pipe(dest("./build"))
    })
}
exports.watchFile = watchFile
gulp.task("jiantin",()=>{
    gulp.watch("./client/*.html",()=>{
        return gulp.src("./client/*.html").pipe(gulp.dest("./build"))
    })
    gulp.watch("./client/css/*",()=>{
        return gulp.src("./client/css/*.css").pipe(gulp.dest("./build/css"))
    })
    gulp.watch("client/js/*",()=>{
        return gulp.src("./client/js/*.js").pipe(gulp.dest("./build/js"))
    })
})
