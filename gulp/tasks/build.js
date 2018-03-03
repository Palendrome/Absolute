var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
imageminMozjpeg = require('imagemin-mozjpeg'),
pngquant = require('imagemin-pngquant');
del = require('del');

gulp.task('deleteDistFolder', function(){
	return del("./dist");
});

gulp.task('optimizeJpegImages',['deleteDistFolder'], function(){
	return gulp.src(['./app/assets/images/*.jpg'])
		.pipe(imagemin([
            imageminMozjpeg({
                quality: 70
            })
        ]))
		.pipe(gulp.dest("./dist/images"));		
});

gulp.task('optimizePngImages',['deleteDistFolder'], function(){
	return gulp.src(['./app/assets/images/*.png'])
	.pipe(imagemin([
            pngquant({
                speed: 1,
				quality:98
            })
        ]))
		.pipe(gulp.dest('./dist/images'));		
});


gulp.task('copyIndex',['deleteDistFolder'],function(){
	return gulp.src('./app/*.html')
		.pipe(gulp.dest('./dist'));	
});

gulp.task('copyStyles',['deleteDistFolder'],function(){	
	return gulp.src('./app/assets/css/styles.css')
		.pipe(gulp.dest('./dist/styles'));
});


gulp.task('build',['deleteDistFolder','copyIndex','copyStyles','optimizeJpegImages','optimizePngImages']);
