var gulp = require('gulp'),
postcss = require('gulp-postcss')
autoprefixer = require('autoprefixer'),
mixins = require('postcss-mixins');
cssImport = require('postcss-import'),
cssvars = require('postcss-simple-vars'),
nested = require ('postcss-nested'),
hexrgba = require ('postcss-hexrgba');



gulp.task('styles', function() {
	console.log("styles is executing");
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport,mixins,nested,cssvars,hexrgba,autoprefixer]))
  .on('error', function(errorInfo){
		console.log(errorInfo.toString());
		this.emit('end');
	})
    .pipe(gulp.dest('./app/css/styles'));
});