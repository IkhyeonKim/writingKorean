<template>
    <div class="alphabets">
        <alphabet :isVowels="false" :alphabets="consonants" @button-clicked="getAlphabet"></alphabet>

        <alphabet :isVowels="true" :alphabets="vowels" @button-clicked="getAlphabet"></alphabet>
    </div>
</template>

<script>
import Alphabet from "./alphabet.vue";

export default {
    props: ["consonants", "vowels"],

    components: {
        alphabet: Alphabet
    },

    methods: {
        getAlphabet(alphabetPath, isVowels) {
            this.$emit('update-alphabet', alphabetPath, isVowels)
        }
    }
};
</script>

<style>
</style>