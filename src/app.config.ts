// 全局配置，参考：https://docs.taro.zone/docs/app-config
export default defineAppConfig({
  pages: ['pages/home/index'],
  // 设置小程序的状态栏、导航条、标题、窗口背景色，默认配置参考：https://docs.taro.zone/docs/app-config#window
  window: {
    // 导航栏背景颜色，如 #000000
    navigationBarBackgroundColor: '#fff',
    // 导航栏标题颜色，仅支持 black / white
    navigationBarTextStyle: 'black',
    // 导航栏标题文字内容
    navigationBarTitleText: 'WeChat',
    // 导航栏样式，仅支持以下值：default 默认样式；custom 自定义导航栏，只保留右上角胶囊按钮
    navigationStyle: 'default',
    // 窗口的背景色
    backgroundColor: '#ffffff',
    // 下拉 loading 的样式，仅支持 dark / light
    backgroundTextStyle: 'light',
    // 顶部窗口的背景色，仅 iOS 支持
    backgroundColorTop: '#ffffff',
    // 底部窗口的背景色，仅 iOS 支持
    backgroundColorBottom: '#ffffff',
    // 是否开启当前页面的下拉刷新
    enablePullDownRefresh: false,
    // 页面上拉触底事件触发时距页面底部距离，单位为 px
    onReachBottomDistance: 50,
    // 屏幕旋转设置，支持 auto / portrait / landscape
    pageOrientation: 'portrait',
  },
  // 启用分包加载时，声明项目分包结构，参考：https://docs.taro.zone/docs/app-config#subpackages
  subPackages: [],
  // 小程序各类网络请求的超时时间，单位均为毫秒
  networkTimeout: {
    // request: 60000,
    // connectSocket: 60000,
    // uploadFile: 60000,
    // downloadFile: 60000,
  },
  // 小程序是否开启 debug 模式，默认关闭
  debug: false,
  // 小程序接口权限相关设置
  permission: {},
});
