import './style/main.scss'
import mainApp from './components/app.vue'

const app = new Vue({
    el: '#app',
    components: {
       'writing-app': mainApp
    }
})