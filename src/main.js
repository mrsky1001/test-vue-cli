import Vue from "vue"
import App from "./App.vue"
import vuetify from "./plugins/vuetify"
import router from "./router"
import store from "./store"

Vue.config.productionTip = false

new Vue({
    el: "#app",
    vuetify,
    router,
    store,
    created() {
        console.log("asdadas")
        console.log(this.$store)
    },
    render: h => h(App),
})
