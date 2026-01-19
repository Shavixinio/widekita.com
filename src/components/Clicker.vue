<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <div class="card">
        <button type="button" @click="count++">
      <img src="../assets/widekita.jpeg" alt="My wife that is very WIDE (my REAL wife is Ryo Yamada, sorry guys)">
      </button>
      <div>
        {{ count }}
      </div>
  </div>
</template>

<style scoped>
  .card {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    align-items: center;
  }
  img {
    max-width: 250px;
  }
</style>
