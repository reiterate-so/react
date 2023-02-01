import typescript from '@rollup/plugin-typescript'

export default [
  {
    input: 'src/index.ts',
    output: {
      format: 'es',
      file: `dist/index.mjs`,
      banner: '"use client";',
      sourcemap: true,
    },
    external: ['react', 'graphql-request'],
    plugins: [
      typescript({
        sourceMap: true,
      }),
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      format: 'cjs',
      file: `dist/index.js`,
      banner: '"use client";',
      sourcemap: true,
    },
    external: ['react', 'graphql-request'],
    plugins: [
      typescript({
        sourceMap: true,
      }),
    ],
  },
]
