<template>
    <div class="py-10 grid grid-cols-1 md:grid-cols-3">
        <p v-html="copy" class="text-xl md:col-start-2 md:col-end-4"
            :class="color === 'white' ? 'text-white' : ' text-black'"></p>
    </div>
</template>

<script>
export default {
    props: ['copy', 'color'],

}
</script>

<style>

</style>