<template>
    <div class="container">
        <img :src="logo" alt="logo">
        <my-canvas :consonants=consonants
        :vowels=vowels
        ></my-canvas>
    </div>
  
</template>

<script>
import myCanvas from './my-canvas.vue'
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
        myCanvas
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