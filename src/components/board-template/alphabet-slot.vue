<template>
  <div @dragover.prevent
    @drop.prevent="drop"
   class="slot"
   :class="addtionalClass">
  </div>
</template>

<script>
export default {
    props: ['addtionalClass'],
    methods: {
        drop(e) {
            const alphabet_id = e.dataTransfer.getData('alphabet_id')

            const alphabet = document.getElementById(alphabet_id)
            const alphabetCount = document.querySelectorAll(`[data-alphabet-key="${alphabet_id}"]`).length + 1
            const cloneAlphabet = alphabet.cloneNode(false)

            cloneAlphabet.setAttribute('id', alphabet_id + alphabetCount)

            e.target.appendChild(cloneAlphabet)
        }
    }
}
</script>

<style>

</style>