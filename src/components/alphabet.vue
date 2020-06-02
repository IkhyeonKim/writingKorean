<template>
    <li @click="buttonClicked(alphabet.default, alphabetKey)" :class="['alphabet', isActive === true ? 'active' : '' ]">
        <img :draggable="draggable"
        @dragstart="dragStart"
        @dragover.stop
         :src="alphabet.default" alt="" 
         :data-alphabet-key="alphabetKey"
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

        dragStart(e) {
            const target = e.target
            // console.log(target, target.dataset.alphabetKey)
            e.dataTransfer.setData('alphabet_id', target.id)
        },
    }
};
</script>

<style>
</style>