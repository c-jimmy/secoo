import Vue from 'vue'
import Router from 'vue-router'

const PagesLayout = () => import('@/pages/PagesLayout')
const HomeView = () => import('@/pages/HomeView')

const DetailsView = () => import('@/pages/DetailsView')
const ListView = () => import('@/pages/ListView')
const SearchView = () => import('@/pages/SearchView')
const ErrorView = () => import('@/pages/404')

const LoginView = () => import('@/pages/LoginView')
const RegisterView = () => import('@/pages/RegisterView')
const CartView = () => import('@/pages/CartView')
const CartConfirmView = () => import('@/pages/CartConfirmView')
const CartPayView = () => import('@/pages/CartPayView')

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: PagesLayout,
            children: [
                // 设置默认首页 
                {
                    path: '',
                    redirect: '/home'
                },
                // 首页
                {
                    path: '/home',
                    component: HomeView
                },
                // 商品详情页
                {
                    path: '/details/:id',
                    component: DetailsView
                },
                // 商品列表页
                {
                    path: '/list/:filterStr',
                    component: ListView
                },
                // 搜索页面
                {
                    path: '/search',
                    component: SearchView
                },
                // 404 错误页面
                {
                    path: '/404',
                    component: ErrorView
                }
            ]
        },
        // Login 页面
        {
            path: '/login',
            component: LoginView
        },
        // Register 页面
        {
            path: '/register',
            component: RegisterView
        },
        // 购物车页面
        {
            path: '/cart',
            component: CartView
        },
        // 购物车确认页面
        {
            path: '/cart-confirm',
            component: CartConfirmView
        },
        // 付款页面
        {
            path: '/cart-pay',
            component: CartPayView
        }
    ]
})
