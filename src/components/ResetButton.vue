<template>
  <input id="resetButton" class="resetButton" type="button" value="Reset Filters">
</template>

<script >
export default  {
}

</script>

<style scoped>
  @keyframes hoverShadow {
    from { box-shadow: 0px 0px 0px 0px; }
    to { box-shadow: 0px 1px 3px 1.5px white; }
  }

  .resetButton {
    align-self: center;
    width: 9rem;
    height: 1.5rem;
    border-radius: 5px;
    background-color: white;
  }

  .resetButton:hover {
    animation: hoverShadow 0.1s;
    animation-fill-mode: forwards;
  }
</style>