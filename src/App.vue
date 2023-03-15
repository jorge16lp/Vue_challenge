<template>
  <div class="logo_container">
    <img src="/logo.png" class="logo">
  </div>
  <header class="header">
    <h1>Vue Challenge</h1>
  </header>
  <section>
    <SearchInput />
  </section>
    <aside class="facets">
      <h2>Status Filter</h2>
      <BaseFilterList v-bind:filters="filters.status" v-slot="slotProps">
        <StatusFilter :filter="slotProps.filter" />
      </BaseFilterList>
      <h2>Species Filter</h2>
      <BaseFilterList v-bind:filters="filters.species" v-slot="slotProps">
        <SpeciesFilter :filter="slotProps.filter" />
      </BaseFilterList>
      <ResetButton v-on:click="cleanFilters()"></ResetButton>
    </aside>
    <main>
      <BaseGrid>
        <CharacterCard
            v-for="character in characters"
            v-bind:key="character.id"
            v-bind:character="character"/>
      </BaseGrid>
    </main>
  <footer>
    <p>Made by Jorge López Peláez - Academy Frontend Software at Empathy.co</p>
  </footer>
</template>
<script lang="js">
  import BaseFilterList from '@/components/BaseFilterList.vue';
  import BaseGrid from '@/components/BaseGrid.vue';
  import CharacterCard from '@/components/CharacterCard.vue';
  import SearchInput from '@/components/SearchInput.vue';
  import ResetButton from "@/components/ResetButton.vue";
  import StatusFilter from "@/components/StatusFilter.vue";
  import SpeciesFilter from "@/components/SpeciesFilter.vue";

  export default {
    components: {
      StatusFilter,
      ResetButton,
      SearchInput,
      CharacterCard,
      BaseFilterList,
      BaseGrid,
      SpeciesFilter
    },
    data() {
      return {
        /*
         * HACK:
         *  In Empathy Platform every request returns you the filters available, as Rick-&-morty API do not retrieve it we hardcode them here.
         */
        filters: {
          status: ['Unknown', 'Alive', 'Dead'],
          species: ['Human', 'Alien', 'Robot', 'Mythological Creature', 'Poopybutthole', 'Cronenberg', 'Disease', 'Unknown']
        }
      };
    },
    mounted() {
      this.$store.dispatch('characters/fetchCharacters');
    },
    computed: {
      characters() {
        return this.$store.getters['characters/getCharacters']
      }
    },
    methods: {
      cleanFilters() {
        this.$store.commit('search/setStatus', '');
        this.$store.commit('search/setSpecie', '');
        this.$store.dispatch('characters/fetchCharacters');
      }
    }
  };
</script>
<style scoped>
  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes hover {
    from { width: 14rem; height: 14rem;}
    to { width: 15rem; height: 15rem; }
  }

  h2 {
    text-align: center;
    border-radius: 5px;
    box-shadow: 0px 1px 3px 1.5px dimgrey;
  }

  .header {
    background-color: lightgrey;
    border-radius: 10px;
    grid-column: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 6px 3px dimgrey;
  }

  aside {
    color: white;
    border-radius: 10px;
    grid-row: 2;
    display: flex;
    flex-flow: column;
  }

  section {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  main {
    background-color: lightgrey;
    border-radius: 10px;
    grid-column: span 2;
    margin-right: 10px;
    box-shadow: 0px 2px 6px 3px dimgrey;
  }

  .logo_container {
    background-image: none;
    margin: 0px 0px 0px 0px;
    box-shadow: 0px 0px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px;
  }

  .logo {
    width: 9rem;
    height: 2.8rem;
    border-radius: 30px;
    animation: blink 1.2s ease-in-out 0.4s;
    box-shadow: 0px 0px 10px 4px ghostwhite;
  }

  .logo:hover {
    animation: none;
  }

  footer {
    background-color: lightgrey;
    border-radius: 10px;
    grid-column: span 3;
    display: flex;
    justify-content: center;
    box-shadow: 0px 2px 6px 3px dimgrey;
    margin-bottom: 10px;
  }

  @media(max-width: 1144px) {
    header {
      font-size: 0.7rem;
    }
  }

  @media (max-width: 744px) {
    header {
      grid-column: span 2;
      font-size: 0.6rem;
    }

    aside {
      grid-row: 3;
      grid-column: span 3;
      display: grid;
      grid-template-columns: 45% 55%;
    }

    input {
      grid-row: 2;
    }

    footer {
      grid-row: 5;
    }
  }
</style>
