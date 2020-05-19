<template>
    <canvas @mousedown="startPainting" @mouseup="finishedPainting" id="canvas"></canvas>
</template>

<script>
export default {

    data() {
        return {
            message: 'Hello world!',
            vueCanvas: null
        }
    },

    methods: {
        startPainting() {
            this.painting = true
            console.log('Started painting')
        },

        finishedPainting() {
            this.painting = false
            console.log('Finished painting')
        }

    },

    mounted() {
        const canvas = document.querySelector('#canvas')
        const ctx = canvas.getContext('2d')

        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;

        ctx.beginPath();
        ctx.moveTo(100, 100)
        ctx.lineTo(200, 100)
        ctx.lineTo(200, 150)
        ctx.closePath()
        ctx.stroke()

        this.vueCanvas = ctx
    },

}
</script>
