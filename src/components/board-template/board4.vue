<template>
    <div :class="['board-template', this.$options.name]">
        <alphabet-slot :addtionalClass="'combined-col'"></alphabet-slot>
        <alphabet-slot></alphabet-slot>
        <alphabet-slot></alphabet-slot>
    </div>
</template>

<script>
import alphabetSlot from './alphabet-slot.vue'

export default {
    name: 'board4',
    components: {
        alphabetSlot
    }
}
</script>

<style>

</style>