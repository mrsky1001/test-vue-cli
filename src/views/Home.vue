<template>
    <div class="home">
        <v-card class="mx-auto" max-width="344" flat>
            <v-list-item three-line>
                <v-list-item-content>
                    <img alt="Vue logo" src="../assets/logo.svg" width="250" />
                </v-list-item-content>
            </v-list-item>
            <v-card-actions class="justify-center">
                <v-btn type="primary" to="/tests">
                    Go to tests!
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "Home",
    components: {},
}
</script>
