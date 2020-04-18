<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex d-flex xs12 sm6 md4>
                <v-navigation-drawer permanent>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="title">
                                List tests
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list dense nav>
                        <v-list-item :key="item.id" v-for="item in listTests" v-on:click="()=>{setTest(item)}" link>
                            <v-list-item-content>
                                <v-list-item-title>{{ item.number }}. {{ item.name }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-navigation-drawer>
            </v-flex>

            <v-flex xs12 sm6 md3>
                <Test />
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Test from "../Test/Test.vue"

export default {
    name: "FormTests",
    data: () => ({}),
    components: {
        Test,
    },
    computed: {
        listTests() {
            return this.$store.state.data.listTests
        },
    },
    methods: {
        setTest(selectedTest) {
            this.$store.dispatch("setTest", selectedTest)
        },
    },
}
</script>
