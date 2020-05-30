<template>
    <li>
        <alphabets
            @update-alphabet="updateAlphabet"
            :isWriting="true"
            :consonants="this.consonants"
            :vowels="this.vowels"
            :propsAlphabet="currentAlphabet"
        ></alphabets>
        <my-canvas :alphabet="currentAlphabetURL"></my-canvas>
    </li>
</template>

<script>
import myCanvas from "./my-canvas.vue";
import alphabets from "./alphabets.vue";

export default {
    props: ["consonants", "vowels"],
    data() {
        return {
            currentAlphabet: "giyeok",
            currentAlphabetURL: "consonants/giyeok.svg "
        };
    },

    components: {
        myCanvas,
        alphabets
    },

    methods: {
        importAll(r) {
            return r.keys().map(r);
        },

        updateAlphabet(alphabetPath, isVowels, alphabetKey) {
            const startPath = 28;

            const newAlphabet = alphabetPath.substring(startPath);

            this.currentAlphabet = alphabetKey;
            this.currentAlphabetURL = newAlphabet;
        }
    }
};
</script>

<style>
</style>