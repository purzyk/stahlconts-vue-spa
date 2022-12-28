<template>
    <div v-if="realizacja">
        <section class="copy">
            <div>
                <div class="bg-white text-black">
                    <div class="w-full h-full  px-p8 py-10">
                        <BlockTitle :title="realizacja.title.rendered" />
                        <Copy :copy="realizacja.acf.opis" />
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="w-full h-full  px-p8 py-10">
                <div v-for="realizacja in realizacja.acf.tresc" :key="realizacja">
                    <div v-if="realizacja.acf_fc_layout === 'zdjecie_na_cala_szerokosc'">
                        <Image :source="realizacja.zdjecie_na_cala_szerokosc" />
                    </div>
                    <div v-if="realizacja.acf_fc_layout === 'zdjecie_oraz_tekst'">
                        <div v-if="realizacja.uklad === 'lewo'" class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <Image :source="realizacja.zdjecie" />
                            <div>
                                <p>{{ realizacja.tekst }}</p>
                            </div>
                        </div>
                        <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <p>{{ realizacja.tekst }}</p>
                            </div>
                            <Image :source="realizacja.zdjecie" />

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
import BlockTitle from '../../components/BlockTitle.vue'
import Copy from '../../components/Copy.vue'
import Loading from "../../components/Loading.vue";
import Image from "../../components/Image.vue";



export default {
    components: {
        BlockTitle, Copy, Loading, Image
    },
    props: ['id'],
    data() {
        return {
            apiUrl: process.env.VUE_APP_ROOT_API,
            realizacja: null
        }
    },
    mounted() {
        fetch(this.apiUrl + '/realizacje/' + this.id)
            .then(res => res.json())
            .then(data => this.realizacja = data)
            .catch(err => console.log(err.message))
    }
}
</script>

<style>

</style>