const {src, dest, series, parallel, lastRun, watch} = require('gulp')
const sass        = require('gulp-sass')
const rename      = require('gulp-rename')
const concat      = require('gulp-concat')
const imagemin    = require('gulp-imagemin')
const cleancss    = require('gulp-clean-css')
const uglify      = require('gulp-uglify')
const browsersync = require('browser-sync').create()
const babel       = require('gulp-babel')
const del         = require('del')
const git         = require('gulp-git')
const prompt      = require('gulp-prompt')

let path = {
  style: {
    src: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'src/sass/*.scss',
      'src/sass/**/*.scss'
    ],
    dest: 'dist/asset/css/'
  },
  scripts: {
    src: [
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/bootstrap/dist/js/bootstrap.min.js',
      'src/asset/js/**/*.js'
    ],
    dest: 'dist/asset/js'
  },
  images: {
    src: ['src/asset/img/*'],
    dest: 'dist/asset/img'
  }
}

function clean() {
  return del('dist')
}

function styles() {
  return src(path.style.src, {sourcemaps: true})
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('styles.css', {newLine: ''}))
  .pipe(cleancss())
  .pipe(rename({suffix: '.min'}))
  .pipe(dest(path.style.dest, {sourcemaps: '.'}))
}

function scripts() {
  return src(path.scripts.src, {sourcemaps: true})
  .pipe(concat('scripts.js'))
  .pipe(babel({presets: ['@babel/env']}))
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .pipe(dest(path.scripts.dest, {sourcemaps: '.'}))
}

function images() {
  return src(path.images.src, {since: lastRun(images)} )
  .pipe(imagemin())
  .pipe(dest(path.images.dest))
}

function browserSync() {
  browsersync.init({
    watch: true,
    server: { baseDir: "./" },
    port: 3000,
    files: [path.scripts.dest, path.style.dest]
  })
}

function watcher () {
  watch(path.style.src, {ignoreInitial: false}, styles)
  watch(path.scripts.src, {ignoreInitial: false}, scripts)
  watch(path.images.src, {ignoreInitial: false}, images)
}

function gitAdd(msg) {
  return src(path.git.src)
    .pipe(git.add({args: '-A'}))
    .pipe(git.commit(msg))
}

function gitPush(branch) {
  git.push('origin', branch, function (err) {
    if (err) throw err;
  });
}

function gitCheckout(branch) {
  git.checkout(branch, function (err) {
    if (err) throw err;
  });
}

function gitMerge(branch) {
  git.merge(branch, function (err) {
    if (err) throw err;
  });
}

function prompter () {
  return src('gulpfile.js')
  .pipe(prompt.confirm({
    message: 'Are you sure to publish your current modifications? (default: N)',
    default: false
  }))
  .pipe(prompt.prompt({
    type: 'input',
    name: 'commitMessage',
    message: 'Please enter your commit message for this publication!',
    default: '[*] Fix many bugs'
  }, function(e){
    gitAdd(e.commitMessage)
    gitPush('dev')
    gitCheckout('master')
    gitMerge('dev')
    series(clean, parallel(styles, images))
    gitAdd('[*] Update dist')
    gitPush('master')
    gitCheckout('dev')
  }))
  // console.log('Publication finished with success!')
}

module.exports = {
  watch: parallel(browserSync, series(clean, images ,watcher)),
  build: series(clean, parallel(styles, styles, scripts, images)),
  clean
}
