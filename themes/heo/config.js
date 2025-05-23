const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
  HEO_LOADING_COVER: true, // 页面加载的遮罩动画

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2025-03-07', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: 'no game no life', url: 'https://space.bilibili.com/503040864?spm_id_from=333.1007.0.0' },
    { title: 'meow', url: 'https://space.bilibili.com/503040864?spm_id_from=333.1007.0.0' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: 'WINTER',
  HEO_HERO_TITLE_2: 'comes',
  HEO_HERO_TITLE_3: '',
  HEO_HERO_TITLE_4: 'meow',
  HEO_HERO_TITLE_5: '请不要点这里',
  HEO_HERO_TITLE_LINK: '',
  // 英雄区遮罩文字
  HEO_HERO_COVER_TITLE: '随便逛逛',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '准心选择', url: '/crosshair' },
  HEO_HERO_CATEGORY_2: { title: '特工选择', url: '/agent' },
  HEO_HERO_CATEGORY_3: { title: '地图选择', url: '/category/地图点位' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好喵！我是',
  ],

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: '',
  HEO_INFO_CARD_ICON1: 'fas fa-user',
  HEO_INFO_CARD_URL2: '',
  HEO_INFO_CARD_ICON2: 'fab fa-github',
  HEO_INFO_CARD_URL3: '',
  HEO_INFO_CARD_TEXT3: '了解更多',

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'AfterEffect',
      img_1: 'https://pic1.imgdb.cn/item/67ca3d43066befcec6df65c2.png',
      color_1: '#ffffff',
      title_2: 'Sketch',
      img_2: 'https://pic1.imgdb.cn/item/67ca3d43066befcec6df65c3.png',
      color_2: '#f4e5e8'
    },
    {
      title_1: 'Docker',
      img_1: 'https://pic1.imgdb.cn/item/67ca3d44066befcec6df65c4.png',
      color_1: '#ffffff',
      title_2: 'Photoshop',
      img_2: 'https://pic1.imgdb.cn/item/67ca3d44066befcec6df65c5.png',
      color_2: '#daf1f9'
    },
    {
      title_1: 'FinalCutPro',
      img_1: 'https://pic1.imgdb.cn/item/67ca3d44066befcec6df65c6.png',
      color_1: '#ffffff',
      title_2: 'Python',
      img_2: 'https://pic1.imgdb.cn/item/67ca3eea066befcec6df65ec.png',
      color_2: '#fbf9ea'
    },
    {
      title_1: 'Swift',
      img_1: 'https://pic1.imgdb.cn/item/67ca3dc5066befcec6df65d1.png',
      color_1: '#ffffff',
      title_2: 'Principle',
      img_2: 'https://pic1.imgdb.cn/item/67ca3dc5066befcec6df65d2.png',
      color_2: '#e1f2fa'
    },
    {
      title_1: 'illustrator',
      img_1: 'https://pic1.imgdb.cn/item/67ca3dc5066befcec6df65d3.png',
      color_1: '#fcdee6',
      title_2: 'CSS3',
      img_2: 'https://pic1.imgdb.cn/item/67ca3dc6066befcec6df65d4.png',
      color_2: '#e4f2ff'
    },
    {
      title_1: 'JS',
      img_1: 'https://pic1.imgdb.cn/item/67ca3e18066befcec6df65da.png',
      color_1: '#fdf1d7',
      title_2: 'HTML',
      img_2: 'https://pic1.imgdb.cn/item/67ca3e19066befcec6df65db.png',
      color_2: '#fddfe7'
    },
    {
      title_1: 'Git',
      img_1: 'https://pic1.imgdb.cn/item/67ca3e19066befcec6df65dc.png',
      color_1: '#fdfdf5',
      title_2: 'Rhino',
      img_2: 'https://pic1.imgdb.cn/item/67ca3e19066befcec6df65dd.png',
      color_2: '#fffff7'
    }
  ],

  HEO_SOCIAL_CARD: false, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '交流频道',
  HEO_SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  HEO_SOCIAL_CARD_TITLE_3: '点击加入社群',
  HEO_SOCIAL_CARD_URL: '',

  // 底部统计面板文案
  HEO_POST_COUNT_TITLE: '文章数:',
  HEO_SITE_TIME_TITLE: '建站天数:',
  HEO_SITE_VISIT_TITLE: '访问量:',
  HEO_SITE_VISITOR_TITLE: '访客数:',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
