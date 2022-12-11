<template>
    <section class="copy">
        <div class="bg-primary">
            <div class="w-full h-full  px-p8 py-10">
                <BlockTitle title="Page not found" />
                <Copy copy="please go to home" />
            </div>
        </div>
    </section>
</template>

<script>
import BlockTitle from '../components/BlockTitle.vue'
import Copy from '../components/Copy.vue'

export default {
    components: {
        BlockTitle, Copy
    },
}
</script>

<style>

</style>