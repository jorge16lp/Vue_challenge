<template>
  <section class="grid">
    <slot></slot>
  </section>
</template>

<script>
  export default{
  }
</script>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, 18rem);
    grid-auto-columns: 1fr;
    justify-content: space-evenly;
  }

  @media (max-width: 1144px) {
    .grid {
      grid-template-columns: repeat(auto-fill, 10rem);
    }
  }

  @media (max-width: 744px) {
    .grid {
      grid-row: 4;
      grid-column: span 3;
      grid-template-columns: repeat(auto-fill, 8rem);
    }
  }
</style>