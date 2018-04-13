// Include our plug-ins

var gulp = require('gulp');

var bowerMain = require('bower-main');

var mainBowerFiles = require('main-bower-files');

var exists = require('path-exists').sync;

var gulpIgnore = require('gulp-ignore');



// Create some task

gulp.task( 'copy-bower-dep', function() {



	// Copy minified resources (Bower)

	gulp.src( bowerMain( 'js', 'min.js' ).minified, {base: './my-bower-components/dir'})

			.pipe( gulp.dest( './target/dist/lib' ));

	

	gulp.src( bowerMain( 'css', 'min.css' ).minified, {base: './my-bower-components/dir'})

			.pipe( gulp.dest( './target/dist/lib' ));

	

	// Copy non-minified resources (Bower)

	// Notice we filter these resources to distinguish which one are minified.

	gulp.src( mainBowerFiles(), {base: './my-bower-components/dir'})

			.pipe( gulpIgnore.include( keepNonMinified ))

			.pipe( gulp.dest( './target/dist/lib' ));

});



/*

 * A function that checks whether a Bower file has a minified version.

 */

function keepNonMinified( file ) {

	

	var keep = true;

	if( file.path.match( '\.js$' )) {

		var minPath = file.path.replace( '.js', '.min.js' );

		keep = ! exists( minPath );

		

	} else if( file.path.match( '\.css$' )) {

		var minPath = file.path.replace( '.css', '.min.css' );

		keep = ! exists( minPath );

	}

	

	// gutil.log( file.path + ' => ' + keep );

	return keep;

}