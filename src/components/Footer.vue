<template>
    <section id="contact">
        <div class="w-full py-10 text-3xl  pt-p6 pb-p6  bg-secondary-400 ">
            <div class="px-p8">
                <BlockTitle title="Contact with us" />
                <div class="pt-10">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div class="col-span-1">Contact form</div>
                        <div class="col-span-1">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="text-white bg-primary pt-p8">
        <div class="px-p8">
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-9">
                <div class="col-span-1 lg:col-span-12 footer__scrollUp flex justify-between items-center mb-p2">
                    <div></div>
                    <a class="text-lg" v-on:click="scrollTo('top')">Scroll up</a>
                </div>
                <div class="col-span-1 lg:col-span-2">
                    <p class="text-xl" v-html="options.acf.slogan"></p>
                </div>
                <div class="col-span-1">
                    <p class="text-xl" v-html="options.acf.telefon_i_mail"></p>
                </div>
                <div class="col-span-1">
                    <p class="text-xl" v-html="options.acf.dane_adresowe"></p>
                </div>
            </div>
            <div class="py-p2">
                <p class="text-sm">{{ copyright }}</p>
            </div>
        </div>
    </section>
</template>


<script>
import ContactForm from './ContactForm.vue'
import BlockTitle from './BlockTitle.vue'

export default {
    components: { ContactForm, BlockTitle },
    props: ['options'],
    data() {
        return {
            copyright: 'Copyright © 2022 StahlConst Sp. z o.o. All rights reserved.'
        }
    },
    methods: {
        scrollTo: function (id) {
            this.$parent.scrollTo(id);
        }
    }
};

</script>

<style>
.footer__scrollUp div {
    width: 100%;
    height: 4px;
    background-color: #fff;
}

.footer__scrollUp a {
    cursor: pointer;
    width: 256px;
    text-align: right;
    text-transform: lowercase;
}
</style>