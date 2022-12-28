<template>
  <div v-if="data">
    <Hero :title="data.acf.hero_tytul" :image="data.acf.hero_image" />
    <section class="copy">
      <div class="bg-primary">
        <div class="w-full h-full  px-p8 py-10">
          <BlockTitle :title="data.acf.tytul" color="white" />
          <Copy :copy="data.acf.opis" color="white" />
        </div>
      </div>
    </section>
    <section class="images">
      <div class="bg-white">
        <div class="w-full px-p8 py-10">
          <div class="pt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Image :source="data.acf.image_left" />
            <Image :source="data.acf.image_right" />
          </div>
          <Copy :copy="data.acf.tresc" />
          <Image :source="data.acf.full_width_image" />
        </div>
      </div>
    </section>
    <section>
      <div class="w-full px-p8 py-10 pt-p6 pb-p6">
        <BlockTitle title="Our team" />
        <div class="pt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div v-for="person in data.acf.osoby_ze_zdjeciami" :key="person">
            <Person :img="person.zdjecie" :name="person.imie_i_nazwisko" :position="person.stanowisko"
              :copy="person.opis" />
          </div>
        </div>
        <div class="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="person in data.acf.osoby_bez_zdjec" :key="person">
            <Person :name="person.imie_i_nazwisko" :position="person.stanowisko" :copy="person.opis" />
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
import Copy from '../components/Copy.vue'
import Person from '../components/Person.vue'
import Loading from "../components/Loading.vue";
import Hero from "../components/Hero.vue";
import Image from "../components/Image.vue";



export default {
  components: {
    BlockTitle, Copy, Person, Loading, Hero, Image
  },
  name: 'Home',
  data() {
    return {
      apiUrl: process.env.VUE_APP_ROOT_API,
      pageId: 484,
      data: null
    }
  },
  mounted() {
    fetch(this.apiUrl + '/pages/' + this.pageId)
      .then(res => res.json())
      .then(data => this.data = data)
      .catch(err => console.log(err.message))
  }
}
</script>
