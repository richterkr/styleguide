const path = require('path');
const Cattleman = require('cattleman');
const rollup = require('rollup');
const uglify = require('rollup-plugin-uglify');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const { minify } = require('uglify-es');

const srcPath = 'src';
const distPath = 'dist';

async function build(module) {
  const srcPathDirs = srcPath.split('/');
  const file = path.parse(module);
  const moduleDirs = file.dir.split(path.sep);
  const targetDirs = moduleDirs.splice(srcPathDirs.length, moduleDirs.length);
  const targetPath = path.normalize(targetDirs.join(path.sep));

  const bundle = await rollup.rollup({
    input: module,
    plugins: [
      resolve({
        jsnext: true,
        main: true,
      }),
      commonjs({
        namedExports: {
          'node_modules/jquery/dist/jquery.min.js': ['jquery'],
        },
      }),
      process.env.NODE_ENV === 'production' && uglify({}, minify),
    ],
  });

  await bundle.write({
    name: file.name,
    format: 'iife',
    file: path.join(distPath, targetPath, `${file.name}.js`),
    sourcemap: process.env.NODE_ENV !== 'production',
    intro: `window.addEventListener('load',function(){new ${file.name}()});`,
  });
}

(async () => {
  const cattleman = new Cattleman({
    directory: srcPath,
    excludes: ['base', 'styleguide'],
  });
  const modules = cattleman.gatherFiles('.js');

  const base = path.join('src', 'base', 'base.js');
  const styleguide = path.join('src', 'styleguide', 'styleguide.js');
  modules.push(base, styleguide);

  await Promise.all(modules.map(async (module) => {
    await build(module);
  }));
})();

exports.build = build;
