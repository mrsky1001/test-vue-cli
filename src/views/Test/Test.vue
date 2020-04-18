<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex v-for="question in test.questions" :key="question.id">
                <v-card min-width="400">
                    <v-img class="font-weight-medium black--text align-end" :src="question.image"> </v-img>
                    <v-card-title>{{ question.content }}</v-card-title>

                    <v-card-actions>
                        <v-radio-group>
                            <v-radio :label="answer.content" v-for="answer in question.answers" :key="answer.number"> </v-radio>
                        </v-radio-group>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
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
