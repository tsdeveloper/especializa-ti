// Include Gulp

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass')
    notify = require("gulp-notify")
    bs = require('browser-sync').create() // create a browser sync instance.
    bower = require('gulp-bower')
    reload      = bs.reload;
	
//Include plugins
var dest = 'www/public/';

var config = {
    rootPath: 'especializati.test',
	sassPath: './resources/sass',
	bowerDir: './bower_components'
 }
 
// // var plugins = require("gulp-load-plugins")({
// // 	pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
// // 	replaceString: /\bgulp[\-.]/
// // });

// gulp.task('bower', function() {
//     return bower()
//         .pipe(gulp.dest(config.bowerDir))
// });

// gulp.task('css', function() {
//     return gulp.src(config.sassPath + '/style.scss')
//         .pipe(sass({
//             style: 'compressed',
//             loadPath: [
//                 './resources/sass',
//                 config.bowerDir + '/bootstrap/dist/css',
//                 config.bowerDir + '/fontawesome/css',
//             ]
//         })
//             .on("error", notify.onError(function (error) {
//                 return "Error: " + error.message;
//             })))
//         .pipe(gulp.dest('./public/css'));
// });

// gulp.task('icons', function() {
//     return gulp.src(config.bowerDir + '/fontawesome/webfonts/**.*')
//         .pipe(gulp.dest('./public/fonts'));
// })
// // Rerun the task when a file changes
// gulp.task('watch', function() {
//     gulp.watch(config.sassPath + '/**/*.scss', ['css']);
// });



// Static server
gulp.task('browser-sync', function() {
    bs.init({
               proxy: "especializati.test:8080" // makes a proxy for localhost:8080
    });

    gulp.watch(["*.html","*.php"]).on("change", bs.reload);
});

// or...

// gulp.task('browser-sync', function() {
//     browserSync.init({
//         proxy: "yourlocal.dev"
//     });
// });
gulp.task('default', ['browser-sync']);
// // Define default destination folder
// // var dest = 'www/public/';

// gulp.src(plugins.mainBowerFiles())
// 	.pipe(plugins.filter('*.js'))
// 	.pipe(/* doing something with the JS scripts */)
// 	.pipe(gulp.dest(dest + 'js'));
// 	gulp.task('js', function() {

// 		var jsFiles = ['src/js/*'];
	
// 		gulp.src(plugins.mainBowerFiles().concat(jsFiles))
// 			.pipe(plugins.filter('*.js'))
// 			.pipe(plugins.concat('main.js'))
// 			.pipe(plugins.uglify())
// 			.pipe(gulp.dest(dest + 'js'));
// 	});
// 	gulp.task('css', function() {

// 		var cssFiles = ['src/css/*'];
	
// 		gulp.src(plugins.mainBowerFiles().concat(cssFiles))
// 			.pipe(plugins.filter('*.css'))
// 			.pipe(plugins.concat('main.css'))
// 			.pipe(plugins.uglify())
// 			.pipe(gulp.dest(dest + 'css'));
// 	});	
// 	gulp.task('css', function() {

// 		var cssFiles = ['src/css/*'];
	
// 		gulp.src(plugins.mainBowerFiles().concat(cssFiles))
// 			.pipe(plugins.filter('*.css'))
// 			.pipe(plugins.order([
// 				'normalize.css',
// 				'*'
// 			]))
// 			.pipe(plugins.concat('main.css'))
// 			.pipe(plugins.uglify())
// 			.pipe(gulp.dest(dest + 'css'));	
// 	});