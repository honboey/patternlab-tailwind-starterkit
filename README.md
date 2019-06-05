# Patternlab + Tailwind CSS Starter Kit
This is the base project for the PatternLab project using the PostCSS and Tailwind.

## Getting Started
These instructions are for getting a development version of the project setup on a local environment. 


### System Requirements
* Node.js (v10.15.3 LTS or later recommended)
* Yarn (v1.16.0)

### Installing and Running
This will install all the dependencies described below section.
There is no need to install gulp globally.
1. clone this repositoy or download
2. run `npm install`
3. run `npm start`

### Build
run `npm run build`

## Dependencies

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
| postcss-purgecss               | tool to remove unused css                                                 |

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
gulp.task('tailwind-postcss', function () {
  return gulp.src('./source/css/style.css')
    .pipe(postcss([
      // Add more modules here and
      require('postcss-import'),
      require('postcss-nested'),
      require('postcss-preset-env'),
      tailwindcss('./tailwind.config.js'),
      require('autoprefixer'),
      assets({
        basePath: 'source/',
        loadPaths: ['images/']
      }),
      require('postcss-clean')
    ]))
    .pipe(rename('style.pkgd.css'))
    .pipe(gulp.dest('./source/dist'));
});

gulp.task('tailwind-postcss:production', function(){
  return gulp.src('./source/css/style.css')
    .pipe(postcss([
      // Here same time
      require('postcss-import'),
      require('postcss-nested'),
      require('postcss-preset-env'),
      tailwindcss('./tailwind.config.js'),
      require('autoprefixer'),
      assets({
        basePath: 'source/',
        loadPaths: ['images/']
      }),
      require('postcss-clean'),
      postcssPurgecss
    ]))
    .pipe(rename('style.pkgd.css'))
    .pipe(gulp.dest('./source/dist'));
});
```
> PurgeCSS should run only for the production build because added tailwind selector will not be applied when browser is reloaded.

## reference sites
- [tailwind](https://tailwindcss.com/docs/what-is-tailwind/)
- [postcss](https://postcss.org/)
- [patternlab](https://patternlab.io/docs/)
- [gulp](https://gulpjs.com/)
- [node](https://nodejs.org/dist/latest-v10.x/docs/api/)

## other notes
> Happy Coding!