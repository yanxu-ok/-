import Vue from 'vue';
import Router from 'vue-router';

const _import_views = (path) => () => import(`_v/${path}`)
Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            redirect: '/login'
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
                    path: '/GameEvaluation',
                    component: _import_views('GameEvaluation'),
                    meta: {
                        title: '游戏评测'
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
        }
    ]
});