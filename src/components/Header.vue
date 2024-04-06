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

      /* chiamata get all'API tramite axios */
      axios.get('https://api.themoviedb.org/3/search/multi', {
        params: {
          api_key: '656ef96b561e171489e8fb7cad6e10ac',
          query: this.searchQuery,
          include_adult: 'true',
          language: 'en-US',
          page: '1'
        }
      })
        .then(response => {
          console.log(response.data);
          const results = response.data.results
          .filter(result => result.poster_path)
          .map(result => ({ 
            ...result, poster_url: result.poster_path ? `https://image.tmdb.org/t/p/w342/${result.poster_path}` : null
          }));

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
    <nav class="navbar expand-lg p-4 mx-auto ms-2">
      <a href="#" class="navbar-brand">
        <img src="../assets/img/boolflix-logo.svg" alt="logo" width="140" height="auto" class="d-inline-block align-text-top">
      </a>
      <!-- form per cercare film -->
      <form role="search" class="d-flex" @submit.prevent="search" id="my_form">
        <a href="#"><span><i class="fa-solid fa-magnifying-glass"></i></span></a>
        <input v-model="searchQuery" class="form-control me-2" type="search" placeholder="Cerca un film tramite API!"
          aria-label="Search">
        <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
        <span><i class="fa-solid fa-magnifying-glass"></i></span>
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
  position: relative;

  input{
    width: 350px;
    padding: 0.25rem 1rem 0.25rem 40px;
  }

  a{
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }
}

</style>