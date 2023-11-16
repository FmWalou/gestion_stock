<template>
  <footer>
    <a href="#">
      Mentions Légales
    </a>
  </footer>
</template>

<script>
export default {
  name: "FooterLayout"
}
</script>

<style scoped lang="scss">
  footer {
    background: #eee;
    height: 3em;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      color: inherit;
      text-decoration: inherit;

      &:hover {
        text-decoration: underline;
       }
    }
  }
</style>