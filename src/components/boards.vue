<template>
    <component :is="boardComponent"></component>
</template>

<script>
import BoardTemplates from './board-template/board-templates'

export default {
    computed: {
        boardComponent() {
            console.log(BoardTemplates['board1'])
            return BoardTemplates['board1']
        }
    }
}
</script>

<style>

</style>