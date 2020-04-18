<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                test
                {{ test.number }}
                {{ test.name }}
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "Test",
    computed: {
        test() {
            console.log(this.$store.state)
            return this.$store.state.data.test
        },
    },
}
</script>
