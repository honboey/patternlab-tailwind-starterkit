# patternlab-project
This is the base project for the PatternLab project using the PostCSS and Tailwind.

## system requirement
You can install node and npm [here](https://nodejs.org).
* node
* npm

## install & start
This will install all the dependencies described below section.
There is no need to install gulp globally.
1. clone this repositoy or download
2. run `npm install`
3. run `npm start`

## build
run `npm run build`

## dependencies

| module name                    | description                                                               |
| -------------------------------| ------------------------------------------------------------------------- |
| gulp                           | workflow automation tool                                                  |
| browser-sync                   | live browser reloading                                                    |
| minimist                       | argument parser                                                           |
| patternlab-node                | patternlab module                                                         |
| styleguidekit-assets-default   | patternlab module                                                         |
| styleguidekit-mustache-default | patternlab module                                                         |
| gulp-postcss                   | a tool for transforming css with javascript                               |
| gulp-rename                    | renames destination file                                                  |
| postcss-assets                 | auto path resolver for assets                                             |
| postcss-import                 | use @import for .css                                                      |
| postcss-nested                 | use nesting like sass for .css                                            |
| postcss-preset-env             | use future css syntax                                                     |
| tailwindcss                    | a utility-first css framework for rapidly building custom user interfaces |

## custom styling

1. `at root`, use tailwind.js file to add, remove or change style values
2. `at root > sources > css > tailwind`, use tailwind.src.css file to import your own custom styled components (make it inside components directory in tailwind folder)
3. `at root > sourced > css`, changes are saved as style.css so do not modify this file
4. if changes are not applied, press `control + c` to terminate current process and run `npm start` again or `npm run build` (you must rebuild or restart the project if the tailwind.js file is changed)
5. you may not need to use sass (however it is not prohibited - please modify gulpfile.js at root to use sass)
6. `at root > sources > _meta`, the style.css file is linked in _00-head.mustache file

## custom javascript files

1. `at root > sources > js`, add your javascript file here
2. `at root > sources > _meta`, link the javascript file in _01-foot.mustache

## adding other modules for postcss
``` javascript
// at root, in gulpfile.js
function processPostCSS () {
  return gulp.src('./source/css/tailwind/tailwind.src.css')
    .pipe(postcss([
      // add post css modules here
      require('postcss-import'),
      require('postcss-nested'),
      require('postcss-preset-env'),
      tailwindcss('./tailwind.js'),
      require('autoprefixer'),
      assets({
        // modify here to change your assets path
        basePath: 'source/',
        loadPaths: ['images/']
      })
    ]))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./source/css'));
    // .pipe(browserSync.reload({ stream: true })); leave this as commented
}
```