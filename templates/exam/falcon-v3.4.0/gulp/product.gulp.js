const gulp = require("templates/exam/falcon-v3.4.0/gulp/gulp.json");
const zip = require("gulp-zip");
const { product } = require("./gulp.json");
const { name, version } = require("./utils.js");

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
|   Make Product
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
gulp.task("product", () =>
  gulp
    .src(product.paths, {
      base: "./",
    })
    .pipe(zip(`${name}-${version}.zip`))
    .pipe(gulp.dest("./"))
);
