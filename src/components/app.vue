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
                <writing v-if="activeTab === 'writing'"
                    :consonants="consonants"
                    :vowels="vowels"
                ></writing>
                <board v-if="activeTab === 'organazing'"
                    :consonants="consonants"
                    :vowels="vowels"
                ></board>
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
            consonants: this.importAll(
                require.context(
                    "../assets/alphabets/black/consonants/",
                    false,
                    /\.(png|jpe?g|svg)$/
                )
            ),
            vowels: this.importAll(
                require.context(
                    "../assets/alphabets/black/vowels/",
                    false,
                    /\.(png|jpe?g|svg)$/
                )
            ),
            consonantsGray: this.importAll(
                require.context(
                    "../assets/alphabets/gray/consonants/",
                    false,
                    /\.(png|jpe?g|svg)$/
                )
            ),
            vowelsGray: this.importAll(
                require.context(
                    "../assets/alphabets/gray/vowels/",
                    false,
                    /\.(png|jpe?g|svg)$/
                )
            ),
        };
    },
    components: {
        writing,
        board
    },
    methods: {
        tabClick(tabName) {
            this.activeTab = tabName
        },
        importAll(r) {
            console.log(r.keys().map(r))
            return r.keys().map(r);
        },
    }
};
</script>

<style>
</style>