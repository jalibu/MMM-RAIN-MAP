import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import pkg from './package.json' with { type: 'json' }

const bannerText = `/*! *****************************************************************************
  ${pkg.name}
  Version ${pkg.version}

  ${pkg.description}
  Please submit bugs at ${pkg.bugs.url}

  (c) ${pkg.author ? pkg.author : pkg.contributors}
  Licence: ${pkg.license}

  This file is auto-generated. Do not edit.
***************************************************************************** */

`

export default {
  input: './src/frontend/Frontend.ts',
  external: ['logger'],
  plugins: [typescript({ module: 'ESNext' }), nodeResolve(), commonjs(), terser()],
  output: {
    banner: bannerText,
    file: `./${pkg.main}`,
    format: 'iife',
    globals: {
      logger: 'Log'
    }
  }
}
