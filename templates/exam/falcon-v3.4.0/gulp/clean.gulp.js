const gulp = require('templates/exam/falcon-v3.4.0/gulp/gulp.json');
const del = require('del');

const { paths, baseDir, version } = require('./utils.js');

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
|  Clean
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
gulp.task('clean', () =>
  del([
    `${baseDir}/${paths.style.dest}/**/*.*`,
    `${baseDir}/${paths.script.dest}/**/*.*`,
    `${baseDir}/**/*.html`,
  ])
);
gulp.task('clean:build', () => del(paths.dir.prod));
gulp.task('clean:live', () => del(`live/${version}`));
