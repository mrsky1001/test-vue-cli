<template>
    <v-container class="test" fluid grid-list-md>
        <v-layout row wrap>
            <v-flex v-for="question in test.questions" :key="question.id">
                <v-card class="test-v-card" min-width="500">
                    <v-img
                        v-if="question.image !== undefined"
                        class="font-weight-medium black--text align-end"
                        :src="question.image"
                    ></v-img>
                    <v-card-title>{{ question.content }}</v-card-title>
                    <vuetify-audio
                        v-if="question.audio !== undefined"
                        class="test-hide-shadow"
                        :file="question.audio"
                        color="success"
                    ></vuetify-audio>
                    <v-card-actions>
                        <v-radio-group>
                            <v-card class="test-hide-shadow" width="1000">
                                <v-container fluid>
                                    <v-row>
                                        <v-col v-for="answer in question.answers" :key="answer.number" class="d-flex child-flex" cols="4">
                                            <div>
                                                <v-row v-if="answer.image !== undefined">
                                                    <v-col>
                                                        <v-img width="150" disabled="disabled" :src="answer.image" />
                                                    </v-col>
                                                </v-row>
                                                <v-row>
                                                    <v-col>
                                                        <v-radio
                                                            class="justify-center"
                                                            :label="answer.content !== undefined ? answer.content : ''"
                                                        ></v-radio>
                                                    </v-col>
                                                </v-row>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card>
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
    data: () => ({
        active: 1,
        selected: [],
    }),
    components: { VuetifyAudio },
    computed: {
        test() {
            console.log(this.$store.state)
            return this.$store.state.data.test
        },
    },
}
</script>
