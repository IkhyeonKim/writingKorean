<template>
    <div class="wrapper">
        <div class="header">
            <div class="logo">
                <img :src="logo" alt="logo" />
            </div>
        </div>
        <div class="content">
            <ul class="tab-title">
                <li @click="tabClick('writing')" :class="activeTab === 'writing' ? 'active' : ''">Writing Korean</li>
                <li @click="tabClick('organazing')" :class="activeTab === 'organazing' ? 'active' : ''">Organazing Korean alphabet</li>
            </ul>

            <ul class="tab-contents">
                <writing v-if="activeTab === 'writing'"></writing>
                <board v-if="activeTab === 'organazing'"></board>
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
            activeTab: 'writing',
        };
    },
    components: {
        writing,
        board
    },
    methods: {
        tabClick(tabName) {
            this.activeTab = tabName
        }
    }
};
</script>

<style>
</style>