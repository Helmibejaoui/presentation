import VueRouter from 'vue-router';
import Main from "../components/Home/Main";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Main
    }
]

const router = new VueRouter({
    routes
})
export default router;