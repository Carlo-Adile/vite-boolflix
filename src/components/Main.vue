<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: "Main",
  data() {
    return {

    }
  },
  computed: {
    /* ottieni i dati da state */
    ...mapState(['searchResults'])
  },
  methods: {
    /* passiamo result.original_language come parametro */
    getFlagUrl(countryCode) {
      if (countryCode === 'en') {
        return `https://flagcdn.com/w40/gb.png`
      } else if(countryCode === 'ja'){
        return `https://flagcdn.com/w40/jp.png`
      } else if(countryCode === 'zh'){
        return `https://flagcdn.com/w40/cn.png`
      } else if(countryCode === 'ko'){
        return `https://flagcdn.com/w40/kr.png`
      } else if(countryCode === 'jv'){
        return `https://flagcdn.com/w40/id.png`
      } else if(countryCode === 'xx'){
        return `https://flagcdn.com/w40/gb.png`
      }

      else {
        return `https://flagcdn.com/w40/${countryCode}.png`;
      }

    }
  }
}
</script>

<template>
  <div id="site_main">
    <h4>Main: Cards</h4>
    <div v-if="searchResults.length > 0">
      <div class="card-container">
        <div v-for="(result, index) in searchResults" :key="index" class="card">
          <h2>{{ result.title }}</h2>
          <p>Titolo in lingua originale: {{ result.original_title }}</p>
          <p>{{ result.media_type }}</p>
          <!-- con immagine dinamica -->
          <p>Lingua: {{ result.original_language }}
            <img :src="getFlagUrl(result.original_language)" width="36" height="27">
          </p> 
          <p>Recensione: {{ result.vote_average }} </p>
        </div>
      </div>

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