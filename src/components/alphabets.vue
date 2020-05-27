<template>
    <div class="alphabets">
        <ul class>
            <alphabet
                v-for="(alphabet, index) in this.consonants"
                :key="index"
                :isVowels="false"
                :alphabet="alphabet"
                :alphabetKey="getAlphabetKey(alphabet.default, false)"
                :isActive="getCurrentAlphabet === getAlphabetKey(alphabet.default, false) ? true : false"
                @button-clicked="getAlphabet"
            ></alphabet>
        </ul>

        <ul class="vowels">
            <alphabet
                v-for="(alphabet, index) in this.vowels"
                :key="index"
                :isVowels="true"
                :alphabet="alphabet"
                :alphabetKey="getAlphabetKey(alphabet.default, true)"
                :isActive="getCurrentAlphabet === getAlphabetKey(alphabet.default, true) ? true : false"
                @button-clicked="getAlphabet"
            ></alphabet>
        </ul>
    </div>
</template>

<script>
import Alphabet from "./alphabet.vue";

export default {
    props: ["consonants", "vowels", "propsAlphabet"],

    computed: {
        getCurrentAlphabet() {
            return this.propsAlphabet
        }
    },

    components: {
        alphabet: Alphabet
    },

    methods: {
        getAlphabet(path, isVowels) {
            this.$emit("update-alphabet", path, isVowels);
        },
        getAlphabetKey(path, isVowels) {
            const startPath = 28;
            const consonantIndex = "consonants/".length;
            const vowelIndex = "vowels/".length;
            // const newAlphabet = path.substring(startPath, path.length - 4)

            return path.substring(
                startPath + (isVowels === true ? vowelIndex : consonantIndex),
                path.length - 4
            );
        }
    }
};
</script>

<style>
</style>