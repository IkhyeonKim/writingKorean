<template>
    <ul :class="this.isVowels ? 'vowels' : ''">
        <li v-for="(alphabet, index) in this.alphabets" :key="index" @click="buttonClicked(alphabet.default)">
            <div>
                <img :src="alphabet.default" alt="" />
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['alphabets', 'isVowels' ],
    methods: {
        buttonClicked(alphabetPath) {
            this.$emit('button-clicked', alphabetPath, this.isVowels)
        }
    }
};
</script>

<style>
</style>