<template>
    <div class="alphabets">
        <alphabet :isVowels=false :alphabets=consonants></alphabet>
        
        <alphabet :isVowels=true :alphabets=vowels></alphabet>
    </div>
</template>

<script>
import Alphabet from './alphabet.vue'

export default {
    props: ['consonants', 'vowels'],
    
    components: {
        alphabet: Alphabet
    }
}
</script>

<style>

</style>