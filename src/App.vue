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
      apiOptionsUrl: process.env.VUE_APP_OPTIONS_API,
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
    fetch(this.apiOptionsUrl)
      .then(res => res.json())
      .then(data => this.options = data)
      .catch(err => console.log(err.message))


  }
}
</script>
<style>

</style>
