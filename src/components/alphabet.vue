<template>
    <li @click="buttonClicked(alphabet.default, alphabetKey)" :class="['alphabet', isActive === true ? 'active' : '' ]">
        <img :draggable="draggable"
         :src="alphabet.default" alt="" 
         :id="alphabetKey" />
    </li>
</template>

<script>
export default {
    props: ["alphabet", "isVowels", "isActive", "alphabetKey", "draggable"],

    methods: {
        buttonClicked(path, key) {
            this.$emit("button-clicked", path, this.isVowels, key);
        },
        drop() {

        },
    }
};
</script>

<style>
</style>