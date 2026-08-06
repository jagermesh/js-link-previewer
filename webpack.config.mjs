import path from 'path';
import { fileURLToPath } from 'url';
import TerserPlugin from 'terser-webpack-plugin';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function makeConfig({ minimize }) {
  return {
    mode: minimize ? 'production' : 'development',
    entry: path.resolve(__dirname, 'src/link-previewer.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: minimize ? 'link-previewer.min.js' : 'link-previewer.js',
      library: {
        name: 'LinkPreviewer',
        type: 'umd',
        export: 'default',
      },
      globalObject: 'this',
    },
    devtool: 'source-map',
    optimization: {
      minimize,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: minimize,
            mangle: minimize,
          },
        }),
      ],
    },
  };
}

export default [
  makeConfig({ minimize: false }),
  makeConfig({ minimize: true }),
];
