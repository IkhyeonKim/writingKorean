<template>
  <div @dragover.prevent
    @drop.prevent="drop"
    id="my-board"
   class="d-inline-block board">
      template
  </div>
</template>

<script>
export default {
    methods: {
        drop(e) {
            const alphabet_id = e.dataTransfer.getData('alphabet_id')

            const alphabet = document.getElementById(alphabet_id)
            const cloneAlphabet = alphabet.cloneNode(false)

            cloneAlphabet.setAttribute('id', 'copied')

            console.log(alphabet_id, alphabet)

            e.target.appendChild(cloneAlphabet)
        }
    }
}
</script>

<style>

</style>