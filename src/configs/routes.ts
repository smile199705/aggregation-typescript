const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        name: '首页',
        path: '/home',
        component: './Home',
    },
    {
        name: '权限演示',
        path: '/access',
        component: './Access',
    },
    {
        name: ' CRUD 示例',
        path: '/table',
        component: './Table',
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
                component: '@/pages/Demo'
            },
            {
                // icon: CrownFilled,
                name: '三级级',
                path: '/demo/3',
                component: '@/pages/Test'
            }
        ]
    },
]

export default routes
