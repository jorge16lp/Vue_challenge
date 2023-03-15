<template>
  <label for="search">
    <input id="search" type="text" class="search" placeholder="Search..." @input="setQuery($event.target.value)"/>
  </label>
</template>

<script >
  export default  {
    methods: {
      setQuery(query) {
        this.$store.commit('search/setQuery', query);
        this.$store.dispatch('characters/fetchCharacters');
      }
    }
  }
</script>

<style scoped>
  .search {
    width: 20rem;
    height: 2rem;
    border-radius: 10px;
    box-shadow: 0px 2px 6px 3px dimgrey;
  }
</style>