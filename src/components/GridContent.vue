<template>
    <div>
        <p v-if="number" class="text-[80px] text-primary mb-12 leading-[100px]" v-html="number"></p>
        <figure v-if="icon" class="h-52 mb-8 flex flex-col justify-end">
            <img class="self-baseline" :src="icon" />
        </figure>
        <h3 v-html="copy" class="border-t-2 pt-10 border-black"></h3>
    </div>
</template>

<script>
export default {
    props: ['copy', 'icon', 'number'],

}
</script>

<style>

</style>