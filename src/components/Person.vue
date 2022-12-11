<template>
    <Image :source="img" />

    <div :class="img ? 'text-2xl' : 'text-base'">
        <h4 class="font-bold">{{ name }}</h4>
        <h5>{{ position }}</h5><br />
        <div :class="img ? 'text-base' : 'text-xs'" v-html="copy"></div>
    </div>
</template>

<script>
import Image from "./Image.vue";

export default {
    components: {
        Image
    },
    props: ['img', 'name', 'position', 'copy'],

}
</script>

<style>

</style>