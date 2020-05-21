<template>
    <div class="wrapper">
        <div class="header">
            <div class="logo">
                <img :src="logo" alt="logo">
            </div>
        </div>
        <div class="content">
            <alphabets :consonants=consonants :vowels=vowels></alphabets>
            <my-canvas :consonants=consonants :vowels=vowels></my-canvas>
        </div>
    </div>
  
</template>

<script>
import myCanvas from './my-canvas.vue'
import alphabets from './alphabets.vue'
import Logo from '../assets/logo.svg'

export default {
    
    data() {
        return {
            consonants: this.importAll(require.context('../assets/alphabets/consonants/', false, /\.(png|jpe?g|svg)$/)),
            vowels: this.importAll(require.context('../assets/alphabets/vowels/', false, /\.(png|jpe?g|svg)$/)),
            logo: Logo,
        }
    },

    components: {
        myCanvas,
        alphabets
    },

    methods: {
        importAll(r) {
            return r.keys().map(r);
        }
    }
}
</script>

<style>

</style>