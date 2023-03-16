<template>
  <button class="filter" @click="setFilter">{{ filter }}</button>
</template>

<script>
export default {
  props: ['filter'],
  methods: {
    setFilter() {
      this.$store.commit('search/setSpecie', this.filter);
      this.$store.dispatch('characters/fetchCharacters');
    }
  }
};
</script>

<style scoped>
  @keyframes hoverColor {
    from { box-shadow: 0 0 0 0; background-color: darkgrey; color: white; }
    to { box-shadow: 0 0 3px 1.5px white; background-color: lightblue; color: black; }
  }

  .filter:hover {
    font-weight: 600;
    cursor: pointer;
    animation: hoverColor;
    animation-fill-mode: forwards;
    border-radius: 2px;
  }

  .filter {
    margin-bottom: 4px;
    background-color: darkgrey;
    border: none;
    color: white;
    padding: 0.3rem 1.5rem;
  }

  @media (max-width: 495px) {
    .filter {
      font-size: 0.8rem;
      padding: 0.3rem 0.5rem;
    }
  }
</style>