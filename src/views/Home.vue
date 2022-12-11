<template>
  <div v-if="data">
    <Hero :title="data.acf.hero_title" :image="data.acf.hero_image" />
    <section>
      <div class="w-full  px-p8 py-10 text-3xl  bg-primary pt-10">
        <div class=" pt-10 border-t-4 text-white mt-10 pb-20">
          <div v-html="data.acf.hero_copy" class="w-3/6">
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="w-full py-10 text-3xl  bg-secondary-300 pt-p6 pb-p6">
        <div class="px-p8">
          <BlockTitle title="Oferta" />
          <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div class="col-span-1" v-for="oferta in data.acf.lista_ofert" :key="oferta">
              <GridContent :icon="oferta.ikona.url" :copy="oferta.tytul" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="w-full py-10 text-3xl pt-p6 pb-p6">
        <div class="px-p8">
          <BlockTitle title="Nasze atuty" />
          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div class="col-span-1" v-for="atut in data.acf.wartosci" :key="atut">
              <GridContent :number="atut.liczba" :copy="atut.opis" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div v-else>
    <Loading />
  </div>
</template>
<script>

import BlockTitle from '../components/BlockTitle.vue'
import GridContent from '../components/GridContent.vue'
import Loading from "../components/Loading.vue";
import Hero from "../components/Hero.vue";


export default {
  components: {
    BlockTitle, GridContent, Loading, Hero
  },
  name: 'Home',
  data() {
    return {
      pageId: 23,
      data: null
    }
  },
  mounted() {
    fetch('https://stahlconst.purzycki.pl/wp-json/wp/v2/pages/' + this.pageId)
      .then(res => res.json())
      .then(data => this.data = data)
      .catch(err => console.log(err.message))
  }
}
</script>
<style>

</style>