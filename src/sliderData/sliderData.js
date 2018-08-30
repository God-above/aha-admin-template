
const sliderData = [
  {
    path: '/',
    name: '系统首页',
    icon: 'el-icon-time',

  },
  {
    path: '/list',
    name: '导航天梯',
    icon: 'el-icon-time',
    child: [
      {
        path: 'list',
        name: '导航栏2',
        child:[
          {
            path: 'list',
            name: '导航栏31',
          },
          {
            path: 'list',
            name: '导航栏32',
          },
          {
            path: 'list',
            name: '导航栏33',
          }
        ]
      },
      {
        path: 'dist1',
        name: '导航栏二',
      },
      {
        path: 'dist2',
        name: '导航栏三',
      },
      {
        path: 'dist3',
        name: '导航栏四',

      },
      {
        path: 'dist4',
        name: '导航栏五',
      }
    ]
  },
  {
    path: '/set',
    name: '系统设置',
    icon: 'el-icon-time',
    child: [
      {
        path: 'set',
        name: '系统设置',
      },
      {
        path: 'loginSet',
        name: '登陆设置'
      },
      {
        path: 'userSet',
        name: '用户设置'
      }
    ]
  }
];

export default {
  sliderData
}


