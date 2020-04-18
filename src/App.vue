<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <div class="d-flex align-center">
                <v-toolbar-title>Tests on VueJS + Vuetify</v-toolbar-title>
            </div>
            <v-spacer></v-spacer>
        </v-app-bar>
        <v-content>
            <router-view />
        </v-content>
        <v-footer app></v-footer>
    </v-app>
</template>
<script>

export default {
    data: () => ({}),
}
</script>
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
