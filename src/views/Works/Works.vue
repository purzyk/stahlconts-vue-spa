<template>
    <div class="py-10 text-3xl  pt-p6 pb-p6">
        <div class="px-p8">
            <BlockTitle title="Works" />
        </div>
    </div>
    <div class="py-10 text-3xl  pt-p6 pb-p6">
        <div class="px-p8">
            <div v-if="realizacje.length" class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="col-span-1" v-for="realizacja in realizacje" :key="realizacja.id">
                    <router-link :to="{ name: 'WorksDetails', params: { id: realizacja.id } }">
                        <div class="pb-20 ">
                            <h2 class="min-h-[80px]">{{ realizacja.title.rendered }}</h2>
                            <div class="h-96">
                                <img class="object-cover h-full w-full" :src="realizacja.featured_media_src_url" />
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div v-else>
                <Loading />
            </div>
        </div>
    </div>

</template>

<script>
import BlockTitle from '../../components/BlockTitle.vue'
import Loading from "../../components/Loading.vue";


export default {
    components: {
        BlockTitle, Loading
    },
    data() {
        return {
            realizacje: []
        }
    },
    mounted() {
        fetch('https://stahlconst.purzycki.pl/en/wp-json/wp/v2/realizacje?_embed=wp:term')
            .then(res => res.json())
            .then(data => this.realizacje = data)
            .catch(err => console.log(err.message))
    }
}
</script>

<style>

</style>