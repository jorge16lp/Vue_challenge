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
    /*
    display: flex;
    flex-flow: row wrap;
    list-style-type: none;
    gap: 12px;

     */
  }
</style>