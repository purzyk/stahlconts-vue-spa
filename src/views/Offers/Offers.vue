<template>
    <div v-if="data">
        <section class="copy">
            <div>
                <div class="bg-secondary-300">
                    <div class="w-full h-full  px-p8 py-10">
                        <BlockTitle :title="data.acf.title" />
                        <Copy :copy="data.acf.opis" />
                    </div>
                </div>
            </div>
        </section>
        <section v-if="oferty.length">
            <div class="w-full py-10 text-3xl bg-secondary-300 pt-p6 pb-p6">
                <div class="px-p8">
                    <BlockTitle title="Offer" />
                    <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        <div class="col-span-1" v-for="oferta in data.acf.lista_ofert" :key="oferta">
                            <router-link :to="{ name: 'OffersDetails', params: { id: oferta.link.ID } }">
                                <GridContent :icon="oferta.ikona.url" :copy="oferta.tytul" />
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Image :source="data.acf.zdjecie" />

        <section class="copy">
            <div>
                <div class="bg-white">
                    <div class="w-full h-full px-p8 py-10">
                        <BlockTitle :title="data.acf.jak_pracujemy_title" />
                        <Copy :copy="data.acf.jak_pracujemy_opis" />
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
import BlockTitle from '../../components/BlockTitle.vue'
import Copy from '../../components/Copy.vue'
import GridContent from '../../components/GridContent.vue'
import Loading from "../../components/Loading.vue";
import Image from "../../components/Image.vue";


export default {
    components: {
        BlockTitle, GridContent, Copy, Loading, Image
    },
    data() {
        return {
            pageId: 475,
            data: null,
            oferty: []
        }
    },
    mounted() {
        fetch('https://stahlconst.purzycki.pl/en/wp-json/wp/v2/pages/' + this.pageId)
            .then(res => res.json())
            .then(data => this.data = data)
            .catch(err => console.log(err.message))

        fetch('https://stahlconst.purzycki.pl/en/wp-json/wp/v2/oferty')
            .then(res => res.json())
            .then(data => this.oferty = data)
            .catch(err => console.log(err.message))
    }
}
</script>

<style>

</style>