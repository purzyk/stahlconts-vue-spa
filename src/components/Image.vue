<template>
    <figure class="pb-10">
        <img class="w-full" :src="source" loading="lazy" />
    </figure>
</template>

<script>
export default {
    props: ['source'],
}
</script>

<style>

</style>