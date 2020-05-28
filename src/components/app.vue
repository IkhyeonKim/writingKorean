<template>
    <div class="wrapper">
        <div class="header">
            <div class="logo">
                <img :src="logo" alt="logo" />
            </div>
        </div>
        <div class="content">
            <ul class="tab-title">
                <li>Writing Korean</li>
                <li>Organazing Korean alphabet</li>
            </ul>

            <ul class="tab-contents">
                <writing></writing>
                <board></board>
            </ul>
        </div>
    </div>
</template>

<script>
import writing from "./writing.vue";
import board from "./board.vue";
import Logo from "../assets/logo.svg";

export default {
    data() {
        return {
            logo: Logo,
        }
    },
    components: {
        writing,
        board
    }
};
</script>

<style>
</style>