<template>
    <div v-if="oferta">
        <section class="copy">
            <div class="bg-secondary-400 text-black">
                <div class="w-full px-p8 py-10">
                    <BlockTitle :title="oferta.title.rendered" />
                    <Copy :copy="oferta.acf.opis" />
                    <Image :source="oferta.featured_media_src_url" />
                    <Copy :copy="oferta.acf.tresc" />
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
import Image from '../../components/Image.vue'
import Copy from '../../components/Copy.vue'
import Loading from '../../components/Loading.vue'

export default {
    components: {
        BlockTitle, Copy, Image, Loading
    },
    props: ['id'],
    data() {
        return {
            oferta: null
        }
    },
    mounted() {
        fetch('https://stahlconst.purzycki.pl/en/wp-json/wp/v2/oferty/' + this.id)
            .then(res => res.json())
            .then(data => this.oferta = data)
            .catch(err => console.log(err.message))
    }
}
</script>

<style >

</style>