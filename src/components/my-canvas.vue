
<template>
    <div class="canvas">
        <div>
            <button @click="clearCanvas" class="button">Clear</button>
            <div class="d-inline-block vertical-align-middle">
                <label for="erase" class="checkbox">
                    <input v-model="eraseMode" type="checkbox" id="erase"/>    
                    <span class="vertical-align-middle">Erase</span>    
                    <span class="checkmark vertical-align-middle"></span>
                </label>
            </div>
        </div>
        <canvas
            @mousedown="startPainting"
            @mouseup="finishedPainting"
            @mousemove="draw"
            id="canvas"
            :style="{'background-image': `url(${alphabetPath}${currentAlphabet})` }"
        ></canvas>
    </div>
</template>

<script>
export default {
    // Todo: 글씨 색, 스타일 추가
    props: ["alphabet"],

    data() {
        return {
            alphabetPath: "/src/assets/alphabets/gray/",
            canvas: null,
            ctx: null,
            painting: false,
            vueCanvas: null,
            eraseMode: false
        };
    },
    computed: {
        currentAlphabet() {
            return this.alphabet;
        },
    },
    methods: {
        startPainting(e) {
            this.painting = true;
            this.draw(e);
        },

        finishedPainting() {
            this.painting = false;
            this.ctx.beginPath();
        },

        draw(e) {
            if (!this.painting) return;

            this.ctx.lineCap = "round";

            if (this.eraseMode === false) {
                this.ctx.lineWidth = 5;
            }else{
                this.ctx.lineWidth = 20;
            }
            
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
            background.src = currentAlphabet();

            this.ctx.drawImage(background, 0, 0);
        },

        clearCanvas() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },

    },

    mounted() {
        this.canvas = document.querySelector("#canvas");
        this.ctx = this.canvas.getContext("2d");

        this.canvas.height = 400;
        this.canvas.width = 600;

        this.vueCanvas = this.ctx;
    },

    beforeUpdate() {
        if(this.eraseMode === false){        
            this.ctx.globalCompositeOperation = 'source-over'
        }else{
            this.ctx.globalCompositeOperation = 'destination-out'
        }
    }
};
</script>
