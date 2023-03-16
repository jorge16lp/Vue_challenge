<template>
  <input id="resetButton" class="reset_button" type="button" value="Reset Filters">
</template>

<script >
export default  {
}

</script>

<style scoped>
  @keyframes hoverShadow {
    from { box-shadow: 0 0 0 0; background-color: white; color: black; }
    to { box-shadow: 0 0 4px 1px white; background-color: royalblue; color: white; }
  }

  .reset_button {
    justify-self: center;
    align-self: center;
    width: 9rem;
    height: 1.5rem;
    border-radius: 5px;
    background-color: white;
  }

  .reset_button:hover {
    font-weight: bold;
    animation: hoverShadow 0.1s;
    animation-fill-mode: forwards;
  }

  @media (max-width: 744px) {
    .reset_button {
      min-width: 14rem;
    }
  }
</style>