# Patternlab + Tailwind CSS Starter Kit

[Patternlab](https://patternlab.io/) is an awesome tool for developing design systems and [Tailwind CSS](https://tailwindcss.com/) is a brilliant utility-first CSS framework built on top of PostCSS. This project combines the two tools into a base Patternlab project that has Tailwind CSS built-in and ready to go.


## Getting Started

These instructions are for getting the project running off a local development environment:

- Install any system requirements on your dev environment
- Use Yarn to install project dependencies and build the project 


### System Requirements

- [Node.js](https://nodejs.org) (v12.14.1 LTS or later recommended)
- [Yarn](https://yarnpkg.com) (v1.21.1 or later)

### Install and Run

It's Javascript all the way down so once you have the the system requirements you can run the following commands:

```
yarn
yarn develop
```

The `yarn` command will install project dependencies and the `yarn start` command builds the project, sets up a local server for the Patternlab UI and watches relevant template files to rebuild on any changes.


### Build

The build command compiles the styleguide CSS and the Patternlab output but it doesn't create a server for the styleguide website. To build, run:

```
yarn run build
```

## Configuring Tailwind

Tailwind CSS comes with default configuration that sets up things like scales for typography, spacing and colours but these defaults and additional configuration can be made by editing the `tailwind.config.js` file in the project root.

> **Note**: if changes to configuration or custom components aren't appearing you may need to rebuild/restart Patternlab. Use `control + c` to stop Gulp and `yarn develop` to rebuild and start the dev server for Patternlab.

Find out more at the [Tailwind website](https://tailwindcss.com/docs/configuration).

### Extending Tailwind with PostCSS modules

PostCSS is a tool for transforming CSS using Javascript and there's already a huge number of modules you can use to do all kinds of things. This starter kit already has the Purge PostCSS module added but you can add additional modules in the Gulp configuration.

For example:

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
> **Note**: PurgeCSS should run only for the production build because added tailwind selector will not be applied when browser is reloaded.


## Configuring Patternlab

The project has Patternlab setup to use the Tailwind CSS output but you can add additional CSS or JS to the Patternlab styleguide as you need.

The existing CSS output file (sytle.css) is linked in the `_00-head.mustache` template file located at `/sources/_meta`.

You can add additional Javascript files to `/sources/js` and then link them into the header and footer templates located at `/sources/_meta`.

Find out more at the [Patternlab website](https://patternlab.io/docs/index.html).


## Background

The version of Patternlab we're using is running in NodeJS with Gulp as a taskrunner, Tailwind CSS is a PostCSS project so it is part of the Javascript eco-system too.

### Dependencies

Here's a quick breakdown of the dependencies within the project and the job they're doing.

| Module name                    | Description                                                               |
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


## Reference sites

- [Tailwind CSS](https://tailwindcss.com/docs/what-is-tailwind/)
- [PostCSS](https://postcss.org/)
- [Patternlab](https://patternlab.io/docs/)
- [Gulp](https://gulpjs.com/)
- [NodeJS](https://nodejs.org/dist/latest-v10.x/docs/api/)


## Found something wrong? Let us know

If you find an error in the project or an inconsistency with the information in our README.md file feel free to submit an issue to the project or send us a pull request with improvements.