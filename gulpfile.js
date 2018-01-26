var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default',function(){
	console.log('hooray, you created a gulp task');
});


gulp.task('html', function(){
	console.log("useful html function");
});

gulp.task('styles', function(){
	console.log("watch the styles");
});

gulp.task('watch', function(){
	
	watch('./app/index.html', function() {		
		gulp.start('html');
	});	
});

watch('./app/assets/styles/**/*.css', function(){
	
	gulp.start('styles');
});

