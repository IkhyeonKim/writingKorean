
<template>
    <div class="canvas">
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
    // Clear
    // Erase
    props: ["alphabet"],

    data() {
        return {
            canvas: null,
            ctx: null,
            painting: false,
            vueCanvas: null
        };
    },
    computed: {
        currentAlphabet() {

            this.changeBackground()
            
            return this.alphabet
            // const background = new Image();
            
            // background.src = this.imgPath + this.alphabet + ".svg";
            
            // console.log(this.alphabet);

            // background.onload = () => {
            //     this.ctx.drawImage(background, 0, 0);
            // };

            // this.ctx.drawImage(background, 0, 0);

            // this.vueCanvas = this.ctx;
        }
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

            this.ctx.lineTo(
                e.clientX - this.canvas.offsetLeft,
                e.clientY - this.canvas.offsetTop
            );
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.moveTo(
                e.clientX - this.canvas.offsetLeft,
                e.clientY - this.canvas.offsetTop
            );
        },

        changeBackground() {
            const background = new Image();
            background.src = currentAlphabet()

            this.ctx.drawImage(background, 0, 0)
        }
    },

    mounted() {
        this.canvas = document.querySelector("#canvas");
        this.ctx = this.canvas.getContext("2d");

        this.canvas.height = 400;
        this.canvas.width = 600;

        const background = new Image();
        background.src = this.alphabet;

        background.onload = () => {
            this.ctx.drawImage(background, 0, 0);
        };

        // this.ctx.drawImage(background, 0, 0);

        this.vueCanvas = this.ctx;
    },

    beforeUpdate() {
        console.log('beforeUpdate')
    }
};
</script>
