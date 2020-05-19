<template>
    <canvas @mousedown="startPainting" 
			@mouseup="finishedPainting" 
			@mousemove="draw"
			id="canvas"></canvas>
</template>

<script>
export default {
	// Clear
	// Erase
    data() {
        return {
            message: "Hello world!",
            canvas: null,
            ctx: null,
            painting: false,
            vueCanvas: null
        };
    },

    methods: {
        startPainting(e) {
            this.painting = true;
            console.log("Started painting");
            this.draw(e);
        },

        finishedPainting() {
            this.painting = false;
            console.log("Finished painting");
            this.ctx.beginPath();
        },

        draw(e) {
            if (!this.painting) return;

            this.ctx.lineWidth = 5;
            this.ctx.lineCap = "round";

            this.ctx.lineTo(e.clientX, e.clientY - this.canvas.offsetTop);
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.moveTo(e.clientX, e.clientY - this.canvas.offsetTop);
        }
    },

    mounted() {
        this.canvas = document.querySelector("#canvas");
        this.ctx = this.canvas.getContext("2d");

        this.canvas.height = 400;
        this.canvas.width = 1000;

        this.vueCanvas = this.ctx;
    }
};
</script>
