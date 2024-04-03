<script>
import { ref } from 'vue';

export default {
  name: "Header",
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    search(){
      /* chiamata all'API */
    }
  }
}
</script>

<template>
  <div id="site_header">
    <h4>Header: Navbar</h4>
    <nav class="navbar expand-lg p-4">
      <a href="#" class="navbar-brand">
        <img src="../assets/vue.svg" alt="logo" width="30" height="24" class="d-inline-block align-text-top">
        Navbar Logo</a>
      <form role="search" class="d-flex">
        <input v-model="searchQuery" class="form-control me-2" type="text" placeholder="Cerca un film tramite la nostra API!" aria-label="Search">
        <button @click="search" class="btn btn-outline-success" type="submit">Search</button>
      </form>

    </nav>
  </div>
</template>

<style lang="scss" scoped>
#site_header {
  width: 100%;
  height: 200px;

  position: fixed;
  top: 0;
  left: 0;

  padding: 1rem;
  border: 1px dashed black;
}
</style>