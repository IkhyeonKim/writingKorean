<template>
  <div @dragover.prevent
    @drop.prevent="drop"
   class="slot">
      template
  </div>
</template>

<script>
export default {
    methods: {
        drop(e) {
            const alphabet_id = e.dataTransfer.getData('alphabet_id')

            const alphabet = document.getElementById(alphabet_id)
            // const alphabets = document.querySelectorAll()
            const cloneAlphabet = alphabet.cloneNode(false)

            cloneAlphabet.setAttribute('id', 'copied')

            console.log(cloneAlphabet, alphabet)

            e.target.appendChild(cloneAlphabet)
        }
    }
}
</script>

<style>

</style>