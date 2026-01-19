<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <div class="card">
    <button type="button" @click="count++">
      <img src="../assets/widekita.jpeg" alt="My wife that is very WIDE (my REAL wife is Ryo Yamada, sorry guys)">
      {{ count }}</button>
  </div>
</template>

<style scoped>
</style>
