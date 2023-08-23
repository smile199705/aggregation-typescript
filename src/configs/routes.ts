const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        name: '首页',
        path: '/home',
        component: './home',
    },
    {
        name: '权限演示',
        path: '/access',
        component: './access',
        wrappers: [
            '@/wrappers/auth',
        ],
    },
    {
        name: ' CRUD 示例',
        path: '/table',
        component: './table',
    },
    {
        name: ' DEMO测试',
        path: '/demo',
        component: '@/layouts/index',
        routes: [
            {
                // icon: ChromeFilled,
                name: '二级',
                path: '/demo/2',
                component: '@/pages/demo'
            },
            {
                // icon: CrownFilled,
                name: '三级级',
                path: '/demo/3',
                component: '@/pages/test'
            }
        ]
    },
    {
        name: '登陆页面',
        path: '/user/login',
        component: '@/pages/user/login',
        layout: false
    }
]

export default routes
