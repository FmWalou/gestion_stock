<script setup lang="ts">
import {RouterLink} from "vue-router";
</script>

<template>
  <header>
    <RouterLink to="/">
      <img src="/logo.svg" alt="Logo Gestion Stock"/>
      <span>Gestion Stock</span>
    </RouterLink>
  </header>
</template>

<style scoped>
  header{
    background: #eeeeee;
    height: 3em;
    display: flex;
    align-items: center;
  }

  a {
    color: inherit;
    text-decoration: inherit;
    display: flex;
    align-items: center;
    gap: 1em;
    padding: 0 0.5em;
    font-weight: bold;
    text-underline: none;
  }

  img {
    height: 3em;
  }

  a span {
    font-weight: bold;
    font-size: 1.3em;
  }

  a:hover{
    text-decoration: underline;
  }
</style>