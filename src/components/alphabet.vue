<template>
    <li @click="buttonClicked(alphabet.default, $event)" :class="['alphabet', this.isActive === true ? 'active' : '' ]">
        <img :src="alphabet.default" alt="" />
    </li>
</template>

<script>
export default {
    props: ["alphabet", "isVowels", "isActive"],

    methods: {
        buttonClicked(alphabetPath, event) {
            console.log(event.path[1]);
            
            this.$emit("button-clicked", alphabetPath, this.isVowels);
        }
    }
};
</script>

<style>
</style>