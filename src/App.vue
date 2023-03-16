<template>
  <div class="logo_container">
    <img src="/logo.png" class="logo">
  </div>
  <header class="header">
    <h1>Vue Challenge</h1>
  </header>
  <section class="search_container">
    <SearchInput v-on:search="setQuery"/>
  </section>
    <aside class="facets">
      <h2 class="status_header">Status Filter</h2>
      <BaseFilterList v-bind:filters="filters.status" v-slot="slotProps">
        <StatusFilter v-on:clickCheckbox="changeCheckbox(slotProps.filter)">{{ slotProps.filter }}</StatusFilter>
      </BaseFilterList>
      <h2 class="species_header">Species Filter</h2>
      <BaseFilterList v-bind:filters="filters.species" v-slot="slotProps">
        <SpeciesFilter v-on:clickCheckbox="changeSpeciesCheckbox(slotProps.filter)">{{ slotProps.filter }}</SpeciesFilter>
      </BaseFilterList>
      <ResetButton class="reset_button" v-on:click="cleanFilters()"></ResetButton>
    </aside>
    <main class="main">
      <BaseGrid>
        <CharacterCard v-for="character in characters" v-bind:key="character.id" v-bind:character="character"/>
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
  import StatusFilter from '@/components/StatusFilter.vue';
  import SpeciesFilter from "@/components/SpeciesFilter.vue";
  import ResetButton from "@/components/ResetButton.vue";

  export default {
    components: {
      ResetButton,
      SearchInput,
      CharacterCard,
      StatusFilter,
      SpeciesFilter,
      BaseFilterList,
      BaseGrid
    },
    data() {
      return {
        characters: [],
        query: '',
        status: '',
        url: 'https://rickandmortyapi.com/api/character/',
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
    watch: {
      query() {
        this.search();
      }
    },
    methods: {
      setQuery(query) {
        this.query = query;
      },
      search() {
        console.log(this.url + '?name=' + this.query + (this.status ? '&status=' + this.status : '')
            + (this.species ? '&species=' + this.species : ''));
        fetch(this.url + '?name=' + this.query + (this.status ? '&status=' + this.status : '')
            + (this.species ? '&species=' + this.species : '')).then(response => response.json())
            .then(data => {
              this.characters = data.results;
              console.log(this.characters);
            });
      },
      changeCheckbox(checkboxValue) {
        if (this.status === checkboxValue) {
          this.status = '';
        } else {
          this.status = checkboxValue;
        }
        this.search();
      },
      changeSpeciesCheckbox(checkboxValue) {
        if (this.species === checkboxValue) {
          this.species = '';
        } else {
          this.species = checkboxValue;
        }
        this.search();
      },
      cleanFilters() {
        const statusFilters = document.getElementsByName('status-filter');
        const speciesFilters = document.getElementsByName('species-filter');
        for (let i=0; i<statusFilters.length; i++)
          statusFilters[i].checked = false;
        for (let i=0; i<speciesFilters.length; i++)
          speciesFilters[i].checked = false;
        this.species = '';
        this.status = '';
        this.search();
      }
    },
    created() {
      this.search();
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
      grid-template: 0.5fr 2fr 0.5fr / 50% 50%;
    }

    .species_header {
      grid-column: 2;
      grid-row: 1;
    }

    .header {
      grid-column: span 2; /* hace falta???? */
    }

    .search_container {
      grid-row: 2;
      grid-column: span 3;
    }

    .reset_button {
      grid-row: 3;
      grid-column: span 2;
    }

    .main {
      grid-column: span 3;
    }

    input {
      grid-row: 2;
    }

    footer {
      grid-row: 5;
    }
  }
</style>
