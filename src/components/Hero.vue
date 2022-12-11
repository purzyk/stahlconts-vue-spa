<template>
    <section class="hero">
        <div>
            <div class="home__hero h-screen object-cover bg-no-repeat bg-center bg-cover relative"
                :style="{ backgroundImage: 'url(' + image + ')' }">
                <div class="absolute bottom-0 left-0 top-0 right-0 bg-black/[.4]">
                    <div class="w-full h-full flex flex-col justify-center px-p8 py-10">
                        <h1 v-html="title"
                            class="text-white text-2xl lg:text-[5rem] lg:leading-[5rem] pt-10 border-t-8"></h1>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
export default {
    props: ['title', 'image'],

}
</script>

<style>

</style>