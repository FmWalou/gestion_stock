<template>
  <header>
    <a href="#">
      <img src="/logo.svg" alt="Logo Gestion Stock"/>
      <span>Gestion Stock</span>
    </a>
  </header>
</template>

<script>
export default {
  name: "HeaderLayout"
}
</script>

<style scoped>
header{
  background: #eeeeee;
  height: 3em;
  display: flex;
  align-items: center;
}

a {
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

a:hover{
  text-decoration: underline;
}
</style>