<template>
  <article class="character">
    <img v-bind:class="['character__image','character__image--'+character.status.toLowerCase()]" v-bind:alt="'character image of'+character.name" v-bind:src="character.image">
    <div class="character__description">
      <p> {{ character.name }} - {{ character.species }} </p>
    </div>
    <p v-bind:class="['character__status','character__status--'+character.status.toLowerCase()]">{{ character.status }}</p>
  </article>
</template>

<script>
  export default {
    props: ['character']
  };
</script>

<style scoped>
  @keyframes hover_alive {
    from { width: 14rem; height: 14rem; box-shadow: 0 2px 6px 3px lightslategrey; }
    to { width: 15rem; height: 15rem; box-shadow: 0 0 6px 3px #aee75b; }
  }

  @keyframes hover_dead {
    from { width: 14rem; height: 14rem; box-shadow: 0 2px 6px 3px lightslategrey; }
    to { width: 15rem; height: 15rem; box-shadow: 0 0 6px 3px #f35a5a; }
  }

  @keyframes hover_unknown {
    from { width: 14rem; height: 14rem; box-shadow: 0 2px 6px 3px lightslategrey; }
    to { width: 15rem; height: 15rem; box-shadow: 0 0 6px 3px darkslategrey; }
  }

  .character {
    background-image: linear-gradient(white, lightgrey, lightgrey, lightgrey, lightgrey, lightgrey, lightgrey, white);
    border-radius: 10px;
    margin: 15px 10px 20px;
    display: flex;
    flex-direction: column;
    min-height: 22.2rem;
    max-height: 22.2rem;
    border: 1px solid ghostwhite;
  }

  .character__image {
    width: 14rem;
    height: 14rem;
    margin-top: 1rem;
    box-shadow: 0 0 6px 3px lightslategrey;
    border-radius: 10px;
    align-self: center;
    cursor: pointer;
  }

  .character__image--alive:hover {
    animation: hover_alive 0.7s;
    animation-fill-mode: forwards;
  }

  .character__image--dead:hover {
    animation: hover_dead 0.7s;
    animation-fill-mode: forwards;
  }

  .character__image--unknown:hover {
    animation: hover_unknown 0.7s;
    animation-fill-mode: forwards;
  }

  .character__description {
    margin-top: 0;
    text-align: center;
  }

  .character__status {
    text-align: center;
    border-radius: 10px;
    margin: 0 1rem 1rem;
  }

  .character__status--alive {
    background: #aee75b;
  }

  .character__status--dead {
    background: #f35a5a;
  }

  .character__status--unknown {
    background: #939393;
  }

  @media (max-width: 1144px) {
    @keyframes hover_alive {
      from { width: 7rem; height: 7rem; box-shadow: 0 2px 6px 3px lightslategrey; }
      to { width: 8rem; height: 8rem; box-shadow: 0 0 6px 3px #aee75b; }
    }

    @keyframes hover_dead {
      from { width: 7rem; height: 7rem; box-shadow: 0 2px 6px 3px lightslategrey; }
      to { width: 8rem; height: 8rem; box-shadow: 0 0 6px 3px #f35a5a; }
    }

    @keyframes hover_unknown {
      from { width: 7rem; height: 7rem; box-shadow: 0 2px 6px 3px lightslategrey; }
      to { width: 8rem; height: 8rem; box-shadow: 0 0 6px 3px darkslategrey; }
    }

    .character {
      min-height: 16.15rem;
      max-height: 16.15rem;
      min-width: 9rem;
      max-width: 9rem;
    }

    .character__image {
      width: 7rem;
      height: 7rem;
    }
  }

  @media (max-width: 744px) {
    @keyframes hover_alive {
      from { width: 5rem; height: 5rem; box-shadow: 0 2px 6px 3px lightslategrey; }
      to { width: 6rem; height: 6rem; box-shadow: 0 0 6px 3px #aee75b; }
    }

    @keyframes hover_dead {
      from { width: 5rem; height: 5rem; box-shadow: 0 2px 6px 3px lightslategrey; }
      to { width: 6rem; height: 6rem; box-shadow: 0 0 6px 3px #f35a5a; }
    }

    @keyframes hover_unknown {
      from { width: 5rem; height: 5rem; box-shadow: 0 2px 6px 3px lightslategrey; }
      to { width: 6rem; height: 6rem; box-shadow: 0 0 6px 3px darkslategrey; }
    }

    .character {
      min-height: 15rem;
      max-height: 15rem;
      min-width: 7rem;
      max-width: 7rem;
    }

    .character__image {
      width: 5rem;
      height: 5rem;
    }
  }
</style>