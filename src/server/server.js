import path from 'path'
import express from 'express'
import Vue from 'vue'
import vueRenderer from 'vue-server-renderer'

const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const ALPHABET_FILE = path.join(DIST_DIR, '/src/assets/')
const PORT = 8080;

const app = express()

app.use(express.static(DIST_DIR))

app.get('/', (req, res) => {
    res.sendFile(HTML_FILE)
})

app.listen(PORT, () => {
    console.log(`App is listening to ${PORT}`)
})