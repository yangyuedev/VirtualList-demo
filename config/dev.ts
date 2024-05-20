import type { UserConfigExport } from '@tarojs/cli';
import TerserPlugin from 'terser-webpack-plugin';

export default {
  logger: {
    quiet: false,
    stats: true,
  },
  mini: {
    webpackChain: (chain) => {
      chain.optimization.minimize(true);
      chain.optimization.minimizer('minifyMainPackage').use(
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            // 默认使用terser压缩
            compress: true,
            // mangle: false,
            // 不改变class名称
            keep_classnames: true,
            // 不改变函数名称
            keep_fnames: true,
          },
        }),
      );
    },
  },
  h5: {},
} satisfies UserConfigExport;
