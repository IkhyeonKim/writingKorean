<template>
    <li>
        <alphabets
            @update-alphabet="updateAlphabet"
            :isWriting="false"
            :consonants="this.consonants"
            :vowels="this.vowels"
            :propsAlphabet="currentAlphabet"
            :draggable="true"
        ></alphabets>
        <boards></boards>
    </li>
</template>

<script>
import alphabets from "./alphabets.vue";
import boards from './boards.vue'
export default {
    props: ["consonants", "vowels"],
    data() {
        return {
            currentAlphabet: "giyeok",
        }
    },
    components: {
        alphabets,
        boards
    },
    methods: {
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