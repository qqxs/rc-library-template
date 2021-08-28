import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import packageJson from './package.json';

// 驼峰
function toCamel(name) {
  return name.replace(/\-(\w)/g, function (all, letter) {
    return letter.toUpperCase();
  });
}
// 首字母大写
const name = toCamel(packageJson.name.replace(/^\S/, (s) => s.toUpperCase()));

const banner = `/*
* ${name}.js v${packageJson.version || '0.1.0'}
* (c) ${new Date().getFullYear()} ${packageJson.author || ''}
* Released under the MIT License.
*/`;

export default {
  input: './src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      banner
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
      banner
    },
    {
      file: packageJson.iife,
      format: 'iife',
      sourcemap: true,
      name,
      banner
    },
    {
      file: packageJson.umd,
      format: 'umd',
      sourcemap: true,
      name,
      banner
    }
  ],
  plugins: [peerDepsExternal(), resolve(), commonjs(), typescript()]
};
