<script>
import axios from 'axios'
import { mapState } from  'vuex'

export default {
  name: "Main",
  data() {
    return {
      
    }
  },
  computed: {
    /* ottieni i dati da state */
    ...mapState(['searchResults'])
  }
}
</script>

<template>
  <div id="site_main">
    <h4>Main: Cards</h4>
    <div v-if="searchResults.length > 0">
      <ul>
        <li v-for="(result, index) in searchResults" :key="index">
          <h2>{{ result.title }}</h2>
          <p>Titolo in lingua originale: {{ result.original_title }}</p>
          <p>Lingua: {{ result.original_language }}</p>
          <p>Recensione: {{ result.vote_average }} </p>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>prova ad effettuare una ricerca tramite la navbar</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#site_main {
  width: 100%;
  padding: 1rem;
  border: 1px dashed black;

}
</style>