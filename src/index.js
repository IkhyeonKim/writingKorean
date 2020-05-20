import './style/main.scss'
import myCanvas from './components/my-canvas.vue' 


const app = new Vue({
    el: '#app',
    components: {
       'my-canvas': myCanvas
    }
})