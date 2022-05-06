<script setup>
import { ref } from 'vue'

defineProps({
  msg: {
    type: String,
    required: true
  }
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <button
    class="p-2 bg-slate-400 rounded-xl active:border-2 border-gray-100 border-solid"
    type="button"
    @click="count++"
  >
    count is: {{ count }}
  </button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
