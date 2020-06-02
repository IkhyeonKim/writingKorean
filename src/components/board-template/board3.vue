<template>
    <div class="board-template board3">
        <alphabet-slot></alphabet-slot>
        <alphabet-slot></alphabet-slot>
        <alphabet-slot :addtionalClass="'combined-col'"></alphabet-slot>
    </div>
</template>

<script>
import alphabetSlot from './alphabet-slot.vue'

export default {
    components: {
        alphabetSlot
    }
}
</script>

<style>

</style>