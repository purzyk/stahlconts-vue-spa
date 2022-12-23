<template>
  <header class="font-IBM" v-if="options" ref="top">
    <SiteHeader :options="options" />
  </header>
  <main class="font-IBM">
    <router-view />
  </main>
  <footer class="font-IBM" v-if="options">
    <SiteFooter :options="options" />
  </footer>
</template>
<script>
import SiteHeader from "./components/Header.vue";
import SiteFooter from "./components/Footer.vue";
import Loading from "./components/Loading.vue";
export default {
  components: {
    SiteHeader, SiteFooter, Loading
  },
  data() {
    return {
      options: null
    }
  },
  methods: {
    scrollTo(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      });
    }
  },
  mounted() {
    fetch('https://stahlconst.purzycki.pl/wp-json/acf/v3/options/options')
      .then(res => res.json())
      .then(data => this.options = data)
      .catch(err => console.log(err.message))
  }
}
</script>
<style>

</style>
