<template>
    <div class="alphabets">

        <div class="collection">
            <ul :class="consonantClass">
                <alphabet
                    v-for="(alphabet, index) in this.consonants"
                    :key="index"
                    :isVowels="false"
                    :alphabet="alphabet"
                    :alphabetKey="getAlphabetKey(alphabet.default, false)"
                    :isActive="getCurrentAlphabet === getAlphabetKey(alphabet.default, false) ? true : false"
                    :draggable="draggable"
                    @button-clicked="getAlphabet"
                ></alphabet>
            </ul>

            <button @click="seeMore(false)" 
            class="button alphabet-see-more-button" 
            :class="{expand: isConsonantActive}"> {{ isConsonantActive === true ? hideMessage : consonantMessage }} 
            </button>
        </div>

        <div class="collection">
            <ul :class="vowelClass">
                <alphabet
                    v-for="(alphabet, index) in this.vowels"
                    :key="index"
                    :isVowels="true"
                    :alphabet="alphabet"
                    :alphabetKey="getAlphabetKey(alphabet.default, true)"
                    :isActive="getCurrentAlphabet === getAlphabetKey(alphabet.default, true) ? true : false"
                    :draggable="draggable"
                    @button-clicked="getAlphabet"
                ></alphabet>
            </ul>

            <button @click="seeMore(true)" 
            class="button alphabet-see-more-button" 
            :class="{expand: isVowelActive}">{{ isVowelActive === true ? hideMessage : vowelMessage }} 
            </button>
        </div>
    </div>
</template>

<script>
import Alphabet from "./alphabet.vue";

export default {
    props: ["consonants", "vowels", "propsAlphabet", "isWriting", "draggable"],
    
    components: {
        alphabet: Alphabet
    },

    data() {
        return {
            consonantClass: 'hide-overflow',
            isConsonantActive: false,
            consonantMessage: 'See all consonants',
            vowelClass: 'hide-overflow',
            isVowelActive: false,
            vowelMessage: 'See all vowels',
            hideMessage: 'Hide alphabets',
        }
    },

    computed: {
        getCurrentAlphabet() {
            return this.propsAlphabet
        }
    },

    methods: {

        getAlphabet(path, isVowels, key) {
            this.$emit("update-alphabet", path, isVowels, key);
        },

        getAlphabetKey(path, isVowels) {

            const startPath = 34;
            let startIndex;

            if(isVowels === false){
                startIndex = "consonants/".length;

            }else {
                startIndex = "vowels/".length;
            }

            return path.substring( startPath + startIndex, path.length - 4);
        },

        seeMore(isVowel) {

            if(isVowel === false) {

                this.consonantClass = this.consonantClass === 'hide-overflow' ? '' : 'hide-overflow'
                this.isConsonantActive = !this.isConsonantActive

                }else {

                this.vowelClass = this.vowelClass === 'hide-overflow' ? '' : 'hide-overflow'
                this.isVowelActive = !this.isVowelActive
            }
        },

        dragstartHandler(ev) {
            ev.dataTransfer.setData("text/plain", ev.target.id)
        },

        dropHandler(ev){
            ev.preventDefault()
        }
    }
};
</script>

<style>
</style>