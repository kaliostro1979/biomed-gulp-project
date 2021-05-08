let projectFolder = require('path').basename(__dirname)
let sourceFolder = "#src"

let path = {
    build: {
        html: projectFolder + "/",
        css: projectFolder + "/css/",
        js: projectFolder + "/js/",
        images: projectFolder + "/images",
        fonts: projectFolder + "/fonts/"
    },
    src: {
        html: [sourceFolder + "/*.html", "!" + sourceFolder + "/_*.html"],
        css: sourceFolder + "/scss/style.scss",
        js: sourceFolder + "/js/app.js",
        images: sourceFolder + "/assets/images/**/*.{jpg,png,svg,webp,ico,gif}",
        fonts: sourceFolder + "/assets/fonts/*.ttf"
    },
    watch: {
        html: sourceFolder + "/**/*.html",
        css: sourceFolder + "/scss/**/*.scss",
        js: sourceFolder + "/js/**/*.js",
        images: sourceFolder + "/assets/images/**/*.{jpg,png,svg,webp,ico,gif}"
    },
    clean: "./" + projectFolder + "/"

}

let {src, dest} = require('gulp')
let gulp = require('gulp')
let browserSync = require('browser-sync').create()
let fileInclude = require('gulp-file-include')
let del = require('del')
let scss = require('gulp-sass')
let autoPrefixer = require('gulp-autoprefixer')
let groupMedia = require('gulp-group-css-media-queries')
let cleanCss = require('gulp-clean-css')
let renameCss = require('gulp-rename')
let uglify = require('gulp-uglify-es').default
let imageMin = require('gulp-imagemin')
let webp = require('gulp-webp')
let webpHtml = require('gulp-webp-html')
let webpCss = require('gulp-webpcss')
let svgSprite = require('gulp-svg-sprite')
let ttfToWoff = require('gulp-ttf2woff')
let ttfToWoff2 = require('gulp-ttf2woff2')
let fonter = require('gulp-fonter')
let fs = require('fs')


function browserSyncInit(params) {
    browserSync.init({
        server: {
            baseDir: "./" + projectFolder + "/"
        },
        port: 3000,
        notify: false
    })
}

function html() {
    return src(path.src.html)
        .pipe(fileInclude())
        .pipe(webpHtml())
        .pipe(dest(path.build.html))
        .pipe(browserSync.stream())
}

function css() {
    return src(path.src.css)
        .pipe(
            scss({
                outputStyle: "expanded"
            })
        )
        .pipe(
            groupMedia()
        )
        .pipe(
            autoPrefixer({
                overrideBrowserList: ["last 5 versions"],
                cascade: true
            })
        )
        .pipe(webpCss())
        .pipe(dest(path.build.css))
        .pipe(cleanCss())
        .pipe(
            renameCss({
                extname: ".min.css"
            })
        )
        .pipe(dest(path.build.css))
        .pipe(browserSync.stream())
}

function js() {
    return src(path.src.js)
        .pipe(fileInclude())
        .pipe(dest(path.build.js))
        .pipe(
            uglify()
        )
        .pipe(
            renameCss({
                extname: ".min.js"
            })
        )
        .pipe(dest(path.build.js))
        .pipe(browserSync.stream())
}

function images() {
    return src(path.src.images)
        .pipe(
            webp({
                quality: 70
            })
        )
        .pipe(dest(path.build.images))
        .pipe(src(path.src.images))
        .pipe(
            imageMin({
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                interlaced: true,
                optimizationLevel: 3
            })
        )
        .pipe(dest(path.build.images))
        .pipe(browserSync.stream())
}

function fonts() {
    src(path.src.fonts)
        .pipe(ttfToWoff())
        .pipe(dest(path.build.fonts))
    return src(path.src.fonts)
        .pipe(ttfToWoff2())
        .pipe(dest(path.build.fonts))
}

gulp.task('otfToTtf', function () {
    return src([sourceFolder + '/assets/fonts/*.otf'])
        .pipe(fonter({
            formats: ['ttf']
        }))
        .pipe(dest(sourceFolder + '/assets/fonts/'))
})

gulp.task('svgSprite', function () {
    return gulp.src([sourceFolder + '/assets/iconsprite/*.svg'])
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: '../icons/icons.svg',
                    example: true
                }
            }
        }))
        .pipe(dest(path.build.images))
})

function fontsStyle(params) {
    let fileContent = fs.readFileSync(sourceFolder + '/scss/fonts.scss')
    if (fileContent == '') {
        fs.writeFile(sourceFolder + '/scss/fonts.scss', '', cb)
        return fs.readdir(path.build.fonts, function (err, items) {
            if (items) {
                let cFontName
                for (let i = 0; i < items.length; i++) {
                    let fontName = items[i].split('.')
                    fontName = fontName[0]
                    if (cFontName !== fontName) {
                        fs.appendFile(sourceFolder + '/scss/fonts.scss', '@include font("' + fontName + '", "' + fontName + '", "400", "normal");\r\n', cb)
                    }
                    cFontName = fontName
                }
            }
        })
    }
}

function cb(params) {

}

function watchFiles(params) {
    gulp.watch([path.watch.html], html)
    gulp.watch([path.watch.css], css)
    gulp.watch([path.watch.js], js)
    gulp.watch([path.watch.images], images)
}

function clean(params) {
    return del(path.clean)
}

let build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts), fontsStyle)
let watch = gulp.parallel(build, watchFiles, browserSyncInit)

exports.fontsStyle = fontsStyle
exports.fonts = fonts
exports.images = images
exports.js = js
exports.css = css
exports.html = html
exports.build = build
exports.watch = watch
exports.default = watch