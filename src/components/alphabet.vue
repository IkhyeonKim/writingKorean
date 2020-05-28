<template>
    <li @click="buttonClicked(alphabet.default, alphabetKey)" :class="['alphabet', isActive === true ? 'active' : '' ]">
        <img :src="alphabet.default" alt="" />
    </li>
</template>

<script>
export default {
    props: ["alphabet", "isVowels", "isActive", "alphabetKey"],

    methods: {
        buttonClicked(path, key) {
            this.$emit("button-clicked", path, this.isVowels, key);
        }
    }
};
</script>

<style>
</style>