<template>
    <div class="wrapper">
        <div class="header">
            <div class="logo">
                <img :src="logo" alt="logo" />
            </div>
        </div>
        <div class="content">
            <alphabets :consonants="consonants" :vowels="vowels" @update-alphabet="updateAlphabet"></alphabets>
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
                    "../assets/alphabets/consonants/",
                    false,
                    /\.(png|jpe?g|svg)$/
                )
            ),
            vowels: this.importAll(
                require.context(
                    "../assets/alphabets/vowels/",
                    false,
                    /\.(png|jpe?g|svg)$/
                )
            ),
            logo: Logo,
            currentAlphabet: 'giyeok',
            currentAlphabetURL: '/src/assets/alphabets/consonants/giyeok.svg '
        };
    },

    mounted() {
        console.log(this.consonants);
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
            const startPath = isVowels ? 29 : 33;

            const newAlphabet = alphabetPath.substring(startPath, alphabetPath.length - 4)
            
            this.currentAlphabet = newAlphabet
            this.currentAlphabetURL = alphabetPath
            // updateCanvas()
        }
    }
};
</script>

<style>
</style>