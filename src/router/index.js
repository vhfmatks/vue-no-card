
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../router/Home';
// import List from '../router/List';
import Admin from '../router/Admin';
import Signup from '../router/Signup';

// 뷰 어플리케이션에 라우터 플러그인 추가
Vue.use(VueRouter);

export default new VueRouter({
    mode : "history",
    routes : [
        { path : "/", component: Home },
        // { path : "/list", component: List },
        { path : "/admin", component: Admin },
        { path : "/signup", component: Signup }
    ]
})