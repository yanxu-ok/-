import Vue from 'vue';
import Router from 'vue-router';

const _import_views = (path) => () => import(`_v/${path}`)
Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: _import_views('Layout/Home.vue'),
            meta: {
                title: '样式外观'
            },
            children: [{
                    path: '/dashboard',
                    component: _import_views('Dashboard'),
                    meta: {
                        title: '系统首页'
                    }
                },
                {
                    path: '/GamesTable',
                    component: _import_views('GamesTable'),
                    meta: {
                        title: '游戏分类'
                    }
                },
                {
                    path: '/GameDetails',
                    component: _import_views('GamesTable/GameDetails'),
                    meta: {
                        title: '游戏详情'
                    }
                },
                {
                    path: '/GameEvaluation',
                    component: _import_views('GameEvaluation'),
                    meta: {
                        title: '游戏评测'
                    }
                },
                {
                    path: '/form',
                    component: () => import('../components/page/BaseForm.vue'),
                    meta: {
                        title: '基本表单'
                    }
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: () => import('../components/page/VueEditor.vue'),
                    meta: {
                        title: '富文本编辑器'
                    }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: () => import('../components/page/Markdown.vue'),
                    meta: {
                        title: 'markdown编辑器'
                    }
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: () => import('../components/page/Upload.vue'),
                    meta: {
                        title: '文件上传'
                    }
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: () => import('../components/page/BaseCharts.vue'),
                    meta: {
                        title: 'schart图表'
                    }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: () => import('../components/page/DragList.vue'),
                    meta: {
                        title: '拖拽列表'
                    }
                },
                {
                    // 拖拽Dialog组件
                    path: '/dialog',
                    component: () => import('../components/page/DragDialog.vue'),
                    meta: {
                        title: '拖拽弹框'
                    }
                },
                {
                    // 国际化组件
                    path: '/GameStatistics',
                    component: _import_views('GameStatistics'),
                    meta: {
                        title: '游戏统计'
                    }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: () => import('../components/page/Permission.vue'),
                    meta: {
                        title: '权限测试',
                        permission: true
                    }
                },
                {
                    path: '/404',
                    component: () => import('../components/page/404.vue'),
                    meta: {
                        title: '404'
                    }
                },
                {
                    path: '/403',
                    component: () => import('../components/page/403.vue'),
                    meta: {
                        title: '403'
                    }
                },
                {
                    path: '/GamePlayer',
                    component: _import_views('GamePlayer'),
                    meta: {
                        title: '玩家管理'
                    }
                }
            ]
        },
        {
            path: '/login',
            component: _import_views('Login/index.vue'),
            meta: {
                title: '登录'
            }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});