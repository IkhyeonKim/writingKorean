<template>
    <div>
        <canvas
            @mousedown="startPainting"
            @mouseup="finishedPainting"
            @mousemove="draw"
            id="canvas"
        ></canvas>
    </div>
</template>

<script>
export default {
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

            this.ctx.lineWidth = 10;
            this.ctx.lineCap = "round";

            this.ctx.lineTo(e.clientX, e.clientY);
			this.ctx.stroke();
			console.log(e.clientX, e.clientY)

            this.ctx.beginPath();
            this.ctx.moveTo(e.clientX, e.clientY);

            console.log("event is working");
        }
    },

    mounted() {
        this.canvas = document.querySelector("#canvas");
        this.ctx = this.canvas.getContext("2d");

        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;

        this.vueCanvas = this.ctx;
    }
};
</script>
