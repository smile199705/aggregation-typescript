// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
// export async function getInitialState(): Promise<{ name: string }> {
//   return { name: '@umijs/max' };
// }
//
// export const layout = () => {
//   return {
//     logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
//     menu: {
//       locale: false,
//     },
//   };
// };

import GlobalFooter from "@/components/GlobalFooter";

require('@/utils/request')


// 运行时配置
import {BulbOutlined, LogoutOutlined} from '@ant-design/icons';
import {
    RequestConfig,
    RunTimeLayoutConfig,
    RuntimeAntdConfig,
} from '@umijs/max';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate

// 登录函数返回内容
export async function getInitialState(): Promise<{
    name: string;
    avatar?: string;
}> {
    return {
        name: '小伟',
        avatar:
            'https://p26-passport.byteacctimg.com/img/user-avatar/312989b46037c16843b1eb44aea82fa2~180x180.awebp?',
    };
}

//运行时基本布局配置
export const layout: RunTimeLayoutConfig = ({initialState}) => {
    //initialState上面登录函数返回的信息

    return {
        logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg', //左上角Logo
        title: '自闭症分析系统', //左上角Logo后面的名字
        menu: {
            locale: false, //菜单是否国际化
        },
        layout: 'top', //菜单的方式，有mix,top,side三种，mix模式子菜单在侧边栏展示，top模式为悬浮展示
        // splitMenus: true, // 这里用了mix才会生效,bia
        contentWidth: 'Fluid', // 自适应大小
        // avatarProps: {
        //     src: initialState?.avatar || undefined, //右上角头像
        //     title: initialState?.name || '用户', //右上角名称
        //     // size: 'small',
        //     size: 'small',
        // },
        contentStyle: {
            paddingBottom: 120,
        },
        footerRender: () => <GlobalFooter />
    };
};

