import './style/main.scss'
import myCanvas from './components/my-canvas.vue' 
import mainApp from './components/app.vue'

const app = new Vue({
    el: '#app',
    components: {
       'writing-app': mainApp
    }
})