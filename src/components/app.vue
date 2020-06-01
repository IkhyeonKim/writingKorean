<template>
    <div class="wrapper">
        <div class="header">
            <div class="logo">
                <img :src="logo" alt="logo" />
            </div>
        </div>
        <div class="content">
            <ul class="tab-title">
                <li
                    @click="tabClick('writing')"
                    :class="activeTab === 'writing' ? 'active' : ''"
                >Writing Korean</li>
                <li
                    @click="tabClick('organazing')"
                    :class="activeTab === 'organazing' ? 'active' : ''"
                >Organazing Korean alphabet</li>
            </ul>

            <ul class="tab-contents">
                <writing
                    v-if="activeTab === 'writing'"
                    :consonants="allConsonants"
                    :vowels="allVowels"
                ></writing>
                <board
                    v-if="activeTab === 'organazing'"
                    :consonants="basicConsonants"
                    :vowels="basicVowels"
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
            activeTab: "writing",
            allConsonants: null,
            allVowels: null,
            allGrayConsonants: null,
            allGrayVowels: null,
            basicConsonants: this.importAll(
                require.context(
                    "../assets/alphabets/black/basic/consonants/",
                    false,
                    /\.svg$/
                )
            ),
            basicVowels: this.importAll(
                require.context(
                    "../assets/alphabets/black/basic/vowels/",
                    false,
                    /\.svg$/
                )
            ),
            combinedConsonants: this.importAll(
                require.context(
                    "../assets/alphabets/black/combined/consonants/",
                    false,
                    /\.svg$/
                )
            ),
            combinedVowels: this.importAll(
                require.context(
                    "../assets/alphabets/black/combined/vowels/",
                    false,
                    /\.svg$/
                )
            ),
            basicGrayConsonants: this.importAll(
                require.context(
                    "../assets/alphabets/gray/basic/consonants/",
                    false,
                    /\.svg$/
                )
            ),
            basicGrayVowels: this.importAll(
                require.context(
                    "../assets/alphabets/gray/basic/vowels/",
                    false,
                    /\.svg$/
                )
            ),
            combinedGrayConsonants: this.importAll(
                require.context(
                    "../assets/alphabets/gray/combined/consonants/",
                    false,
                    /\.svg$/
                )
            ),
            combinedGrayVowels: this.importAll(
                require.context(
                    "../assets/alphabets/gray/combined/vowels/",
                    false,
                    /\.svg$/
                )
            ),
        };
    },

    mounted() {
        this.allVowels = this.basicVowels.concat(this.combinedVowels);
        this.allConsonants = this.basicConsonants.concat(this.combinedConsonants);

        this.allGrayVowels = this.basicGrayVowels.concat(this.combinedGrayVowels);
        this.allGrayConsonants = this.basicGrayConsonants.concat(this.combinedGrayConsonants);
    },

    components: {
        writing,
        board
    },

    methods: {
        tabClick(tabName) {
            this.activeTab = tabName;
        },
        importAll(r) {
            console.log(r.keys().map(r));
            return r.keys().map(r);
        }
    }
};
</script>

<style>
</style>