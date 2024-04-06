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
    calcReviewStar(voteAverage) {
      const stars = voteAverage / 2;
      const parsedStars = Math.floor(stars);

      const faFullStar = "fa-solid fa-star";
      const faHalfStar = "fa-solid fa-star-half-alt";
      const faEmptyStar = "fa-regular fa-star";


      /* ogni iterazione crea un array di icone  */
      const templateStars = [];

      for (let i = 0; i < parsedStars; i++) {
        templateStars.push(faFullStar);
      }
      if (stars % 1 !== 0) {
        templateStars.push(faHalfStar);
      }
      while (templateStars.length < 5) {
        templateStars.push(faEmptyStar);
      }

      return templateStars;
    },
    /* passiamo result.original_language come parametro */
    getFlagUrl(countryCode) {
      if (countryCode === 'en') {
        return `https://flagcdn.com/w40/gb.png`
      } else if (countryCode === 'ja') {
        return `https://flagcdn.com/w40/jp.png`
      } else if (countryCode === 'zh') {
        return `https://flagcdn.com/w40/cn.png`
      } else if (countryCode === 'ko') {
        return `https://flagcdn.com/w40/kr.png`
      } else if (countryCode === 'jv') {
        return `https://flagcdn.com/w40/id.png`
      } else if (countryCode === 'xx') {
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
    <div v-if="searchResults.length > 0" id="my_card_container" class="container-fluid">
      <div class="row justify-content-between">
        <div v-for="(result, index) in searchResults" :key="index" id="my_col">
          <div class="card mb-1 border-0">

            <!-- copertina -->
            <img :src="result.poster_url" alt="" class="card-img poster_img">

            <!-- hover info -->
            <div class="card_detail">
              <h2>{{ result.title }}</h2>
              <p>Titolo in lingua originale: {{ result.original_title }}</p>
              <p>{{ result.media_type }}</p>
              <p>Recensione:
                <span v-for="(starClass, index) in calcReviewStar(result.vote_average)" :key="index">
                  <i :class="starClass"></i>
                </span>
              </p>
              <div class="my_lang">
                <img :src="getFlagUrl(result.original_language)" width="36" height="27" >
              </div>
            </div>
          </div>
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

}

#my_col {
  width: calc((100% / 12) * 2);
  height: auto;
}

.card {
  position: relative;
  overflow: hidden;

  .poster_img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 1 / 1.5;
  }
}

.card_detail {
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  padding: 1rem;
  width: 100%;
  height: 100%;
  background-color: darkgray;
  

  h2 {
    text-align: center;
  }
}

.card:hover .card_detail {
  display: inline
}

.my_lang{
  display: flex;
  justify-content: center;
}
</style>