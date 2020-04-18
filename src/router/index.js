import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/views/Home.vue"
import FormTests from "@/views/FormTests/FormTests.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/tests",
        name: "Tests",
        component: FormTests,
    },
]

const router = new VueRouter({
    routes,
})

export default router
