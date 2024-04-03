<script>
import axios from 'axios';
import { mapState } from 'vuex'

export default {
  name: "Header",
  data() {
    return {
      searchQuery: ''
    }
  },
  computed: {
    ...mapState(['searchResults'])
  },
  methods: {
    search() {
      console.log("query inserita...", this.searchQuery);
      const apiKey = '656ef96b561e171489e8fb7cad6e10ac';
      const url = 'https://api.themoviedb.org/3/search/movie';

      /* chiamata get all'API tramite axios */
      axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: apiKey,
          query: this.searchQuery,
          include_adult: 'true',
          language: 'en-US',
          page: '1'
        }
      })
        .then(response => {
          console.log(response.data);
          const results = response.data.results;

          /* aggiorniamo state */
          this.$store.commit('updateSearchResults', results);
        })
        .catch(error => {
          console.log("errore nella richiesta API");
        })
    }
  }
}
</script>

<template>
  <div id="site_header">
    <nav class="navbar bg-body-tertiary expand-lg p-4 mx-auto">
      <a href="#" class="navbar-brand">
        <img src="../assets/vue.svg" alt="logo" width="30" height="24" class="d-inline-block align-text-top">
        Navbar Logo
      </a>
      <!-- form per cercare film -->
      <form role="search" class="d-flex" @submit.prevent="search" id="my_form">
        <input v-model="searchQuery" class="form-control me-2" type="search" placeholder="Cerca un film tramite API!"
          aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>

    </nav>
  </div>
</template>

<style lang="scss" scoped>
#site_header {
  width: 100%;
  border: 1px dashed black;
}

#my_form{
  input{
    width: 350px;
  }
}

</style>