<template>
    <div class="board">
        <ul class="board-tab-title">
            <li
                v-for="(board, index) in this.boards"
                :key="index"
                :class="[{ active: currentBoard === board}]"
                @click="currentBoard = board"
            >{{ board }}</li>
        </ul>

        <component :is="boardComponent"></component>
    </div>
</template>

<script>
import BoardTemplates from "./board-template/board-templates";

export default {
    data() {
        return {
            currentBoard: "Board 4",
            boards: [
                "Board 1",
                "Board 2",
                "Board 3",
                "Board 4",
                "Board 5",
                "Board 6",
                "Board 7",
                "Board 8",
                "Board 9",
                "Board 10"
            ]
        };
    },
    computed: {
        boardComponent() {
            const boardName = this.currentBoard.split(" ").join("").toLowerCase();
            return BoardTemplates[boardName];
        }
    }
};
</script>


<style>
</style>