<template>
    <div :class="['board-template', this.$options.name]">
        <alphabet-slot></alphabet-slot>
        <alphabet-slot></alphabet-slot>
    </div>
</template>

<script>
import alphabetSlot from './alphabet-slot.vue'

export default {
    name: 'board1',
    components: {
        alphabetSlot
    }
}
</script>

<style>

</style>