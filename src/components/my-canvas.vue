
<template>
    <canvas @mousedown="startPainting" 
			@mouseup="finishedPainting" 
			@mousemove="draw"
			id="canvas"></canvas>
</template>

<script>
// import giyeok from '../assets/alphabets/consonants'
export default {
	// Clear
    // Erase
    
    data() {
        return {
            message: "Hello world!",
            canvas: null,
            ctx: null,
            painting: false,
            vueCanvas: null,
            consonants: this.importAll(require.context('../assets/alphabets/consonants/', false, /\.(png|jpe?g|svg)$/)),
            vowels: this.importAll(require.context('../assets/alphabets/vowels/', false, /\.(png|jpe?g|svg)$/)),
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
        },

        importAll(r) {
            return r.keys().map(r);
        }
    },

    mounted() {
        this.canvas = document.querySelector("#canvas");
        this.ctx = this.canvas.getContext("2d");

        this.canvas.height = 400;
        this.canvas.width = 1000;

        const background = new Image()
        background.src = this.consonants[0].default

        background.onload = () => {
            this.ctx.drawImage(background, 0 ,0)
        }

        this.ctx.drawImage(background, 0, 0);

        this.vueCanvas = this.ctx;
    }
};
</script>
