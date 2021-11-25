const { src, dest, series, watch} = require('gulp');
const concat = require('gulp-concat');
const htmlMin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const svgSprite = require('gulp-svg-sprite');
const image = require('gulp-image');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const browserSync = require('browser-sync').create();

const clean = () => {
    return del(['dist'])
}

const resourses = () => {
    return src('src/resourses/**')
    .pipe(dest('dist/resourses'))
}

const styles = () => {
    return src('src/styles/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(concat('main.css'))
    .pipe(autoprefixer({
        cascade:false
    }))
    .pipe(cleanCss({
        level: {
            2: {
                removeWhitespace : false
            }
        }
    }))
    .pipe(sourcemaps.write())
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const htmlMinify = () => {
    return src('src/**/*.html')
    .pipe(htmlMin({
        collapseWhitespace: true,
    }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const svgSprites = () => {
    return src('src/img/svg/**/*.svg')
    .pipe(svgSprite({
        mode: {
            stack: {
                sprite:'../sprite.svg'
            }
        }
    }))
    .pipe(dest('dist/img'))
}

const scripts = () => {
    return src([
        'src/js/components/**/*.js',
        'src/js/**/*.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(concat('app.js'))
    .pipe(uglify().on('error', notify.onError()))
    .pipe(sourcemaps.write())
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
}

const images = () => {
    return src([
        'src/img/**/*.jpg',
        'src/img/**/*.png',
        'src/img/*.svg',
        'src/img/**/*.jpeg',
        'src/img/**/*.webp'
    ])
    .pipe(image())
    .pipe(dest('dist/img'))
}

watch('src/**/*.html', htmlMinify);
watch('src/styles/**/*.css', styles);
watch('src/img/svg/**/*.svg', svgSprites);resourses
watch('src/js/**/*.js', scripts);
watch('src/resourses/**', resourses);


exports.styles = styles;
exports.htmlMinify = htmlMinify;
exports.svgSprites = svgSprites;
exports.images = images;
exports.scripts = scripts;

exports.default = series(clean, resourses, htmlMinify, scripts, styles, svgSprites, images, watchFiles)