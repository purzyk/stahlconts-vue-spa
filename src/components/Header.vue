<template>
    <section class="bg-primary font-IBM w-full px-p8 py-10" id="top">
        <div class="flex justify-between flex-col lg:flex-row items-center">
            <div class="flex w-full lg:w-[inherit] justify-between items-center">
                <router-link to="/">
                    <img class="h-6 md:h-10 xl:h-14" :src="options.acf.logo.url" />
                </router-link>
                <button class="lg:hidden" @click="showMenu()">
                    <svg v-if="showMobileMenu" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="#fff" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="#fff" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <div :class="this.showMobileMenu ? 'block' : 'hidden'" class="lg:flex justify-end w-full">
                <nav class="w-full flex flex-col lg:flex-row lg:justify-center text-2xl lg:text-base text-center">
                    <router-link v-on:click="this.showMobileMenu = false" class="nav-link"
                        to="/"><span>home</span></router-link>
                    <router-link v-on:click="this.showMobileMenu = false" class="nav-link"
                        :to="{ name: 'Offers' }"><span>offers</span></router-link>
                    <router-link v-on:click="this.showMobileMenu = false" class="nav-link"
                        :to="{ name: 'Works' }"><span>works</span></router-link>
                    <router-link v-on:click="this.showMobileMenu = false" class="nav-link"
                        :to="{ name: 'AboutUs' }"><span>about us</span></router-link>
                    <button class="nav-link" v-on:click="scrollTo('contact'); this.showMobileMenu = false">
                        contact
                    </button>
                </nav>
                <div class="flex justify-end items-center">
                    <a class="ml-6" target="_blank" :href="social.url" v-for="social in options.acf.socials"
                        v-bind:key="social">
                        <img class="h-6" :src="social.ikona.url" />
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['options', 'someFunctionParent'],
    data() {
        return {
            showMobileMenu: false,
        };
    },
    methods: {
        showMenu() {
            this.showMobileMenu = !this.showMobileMenu;
        },
        scrollTo: function (id) {
            this.$parent.scrollTo(id);
        }
    },
};

</script>

<style stoped>
.nav-link span {
    position: relative;
}

.nav-link span:after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #fff;
    transition: width 0.3s;
}

.nav-link:hover span:after {
    width: 100%;
}

.nav-link.router-link-active span:after {
    width: 100%;
}
</style>