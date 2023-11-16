<script setup lang="ts">
import {RouterLink} from "vue-router";
</script>

<template>
  <main>
    <h1>Gérer efficacement votre stock</h1>
    <RouterLink to="/stock" class="button primary">
      <span>Voir le stock</span>
      <font-awesome-icon icon="fa-solid fa-angle-right" />
    </RouterLink>
  </main>
</template>

<style scoped>
  main {
    flex: 0;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
    text-align: center;
  }
</style>
