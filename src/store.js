import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    searchResults: []
  },
  mutations: {
    /* aggiorniamo i dati dello state con i results */
    updateSearchResults(state, results){
      state.searchResults = results;
    }
  },
  actions: {
  }
})