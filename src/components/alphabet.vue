<template>
    <ul :class="this.isVowels ? 'vowels' : ''">
        <li v-for="(alphabet, index) in this.alphabets" :key="index">
            <div>
                <img :src="alphabet.default" alt />
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['alphabets', 'isVowels']
};
</script>

<style>
</style>