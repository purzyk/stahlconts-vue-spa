<template>
    <div class="border-t-4 pt-10  text-3xl mb-[100px]"
        :class="color === 'white' ? 'border-white text-white' : 'border-black text-black'">
        {{ title }}
    </div>
</template>

<script>
export default {
    props: ['title', 'color'],
}
</script>

<style>

</style>