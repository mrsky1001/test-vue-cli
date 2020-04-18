<template>
    <v-container class="test" fluid grid-list-md>
        <v-layout row wrap>
            <v-flex v-for="question in test.questions" :key="question.id">
                <v-card class="test-v-card" min-width="500">
                    <v-img class="font-weight-medium black--text align-end" :src="question.image"> </v-img>
                    <v-card-title>{{ question.content }}</v-card-title>
                    <vuetify-audio class="test-hide-shadow" :file="question.audio" color="success"></vuetify-audio>
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
import "./_Test.scss"
import VuetifyAudio from "vuetify-audio"

export default {
    name: "Test",
    components: { VuetifyAudio },
    computed: {
        test() {
            console.log(this.$store.state)
            return this.$store.state.data.test
        },
    },
}
</script>
