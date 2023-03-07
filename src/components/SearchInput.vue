<template>
  <label for="search">
    <input id="search" type="text" class="search" placeholder="Search..." v-on:input="$emit('search',$event.target.value)"/>
  </label>
</template>

<script >
  export default  {

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