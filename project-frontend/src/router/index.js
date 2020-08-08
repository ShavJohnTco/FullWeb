import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from "../components/HomePage";
import FormExample from "../components/FormExample";
import Users from "../components/users/Users";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import UserProfile from "../components/users/UserProfile";
import Products from "../components/products/Products";
import ProductShow from "../components/products/ProductShow";
import ProductEdit from "../components/products/ProductEdit";

Vue.use(Router);

//export default new Router

const router = new Router({
    mode: "history",
    routes: [
        {path: '/', name: 'HelloWorld', component: HelloWorld, meta: {auth: true}},
        {path: '/login', name: 'Login', component: Login},
        {path: '/register', name: 'Register', component: Register},
        {path: '/form', name: 'FormExample', component: FormExample},
        {path: '/users', name: 'Users', component: Users, meta: {layout: 'dashboard'}},
        {path: '/users/:user_id', name: 'User-Profile', component: UserProfile, meta: {layout: 'dashboard'}},
        {path: '/products', name: 'Products', component: Products, meta: {layout: 'dashboard'}},
        {path: '/products/:product_id', name: 'Products-Show', component: ProductShow, meta: {layout: 'dashboard'}},
        {path: '/products/:product_id/edit', name: 'Products-Edit', component: ProductEdit, meta: {layout: 'dashboard'}},
    ]
})

router.beforeEach((to, from, next) => {
    if(to.meta.auth && !localStorage.getItem('access_token')){
        router.push({name: 'Login'})
    }else{
        next()
    }
})

export default router
