<template>
    <div class="wrapper">
        <div class="header">
            <div class="logo">
                <img :src="logo" alt="logo" />
            </div>
        </div>
        <div class="content">
            <alphabets :consonants="consonants" 
                :vowels="vowels"
                @update-alphabet="updateAlphabet" 
                :propsAlphabet="currentAlphabet">
            </alphabets>
            <my-canvas :alphabet="currentAlphabetURL"></my-canvas>
        </div>
    </div>
</template>

<script>
import myCanvas from "./my-canvas.vue";
import alphabets from "./alphabets.vue";
import Logo from "../assets/logo.svg";

export default {
    data() {
        return {
            consonants: this.importAll(
                require.context(
                    "../assets/alphabets/black/consonants/",
                    false,
                    /\.(png|jpe?g|svg)$/
                )
            ),
            vowels: this.importAll(
                require.context(
                    "../assets/alphabets/black/vowels/",
                    false,
                    /\.(png|jpe?g|svg)$/
                )
            ),
            consonantsGray: this.importAll(
                require.context(
                    "../assets/alphabets/gray/consonants/",
                    false,
                    /\.(png|jpe?g|svg)$/
                )
            ),
            vowelsGray: this.importAll(
                require.context(
                    "../assets/alphabets/gray/vowels/",
                    false,
                    /\.(png|jpe?g|svg)$/
                )
            ),
            logo: Logo,
            currentAlphabet: 'giyeok',
            currentAlphabetURL: 'consonants/giyeok.svg '
        };
    },

    mounted() {

    },

    components: {
        myCanvas,
        alphabets
    },

    methods: {
        
        importAll(r) {
            return r.keys().map(r);
        },

        updateAlphabet(alphabetPath, isVowels){
            const startPath = 28;

            const newAlphabet = alphabetPath.substring(startPath)
            
            this.currentAlphabet = this.getAlphabetKey(alphabetPath, isVowels)
            this.currentAlphabetURL = newAlphabet
            // updateCanvas()
        },

        getAlphabetKey(path, isVowels) {

            const startPath = 28;
            const consonantIndex = 'consonants/'.length
            const vowelIndex = 'vowels/'.length
            // const newAlphabet = path.substring(startPath, path.length - 4)

            return path.substring(startPath + (isVowels === true ? vowelIndex : consonantIndex), path.length - 4)
        }
    }
};
</script>

<style>
</style>