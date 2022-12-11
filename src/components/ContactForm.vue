<template>
    <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="col-span-1 mb-3">
                <Field name="name" placeholder="Imię i nazwisko" type="text" class="form-control"
                    :class="{ 'is-invalid': errors.name }" />
                <label>Imię i nazwisko</label>
                <div class="invalid-feedback">{{ errors.name }}</div>
            </div>
            <div class="col-span-1 mb-3">
                <Field placeholder="Organizacja" name="organizacja" type="text" class="form-control"
                    :class="{ 'is-invalid': errors.organizacja }" />
                <label>Organizacja</label>
                <div class="invalid-feedback">{{ errors.organizacja }}</div>
            </div>
            <div class="col-span-1 mb-3">
                <Field placeholder="Email" name="email" type="text" class="form-control"
                    :class="{ 'is-invalid': errors.email }" />
                <label>E-mail</label>
                <div class="invalid-feedback">{{ errors.email }}</div>
            </div>
            <div class="col-span-1 mb-3">
                <Field placeholder="Telefon" name="telefon" type="text" class="form-control"
                    :class="{ 'is-invalid': errors.telefon }" />
                <label>Telefon</label>
                <div class="invalid-feedback">{{ errors.telefon }}</div>
            </div>
            <div class="md:col-span-2 mb-3">
                <Field placeholder="Wiadomość" name="wiadomosc" as="textarea" class="form-control"
                    :class="{ 'is-invalid': errors.wiadomosc }" />
                <label>Wiadomość</label>
                <div class="invalid-feedback">{{ errors.wiadomosc }}</div>
            </div>
            <div class="md:col-span-2 mb-3">
                <div class="block">
                    <div class="mt-2">
                        <label class="inline-flex items-center">
                            <Field name="acceptTerms" type="checkbox" id="acceptTerms" value="true" checked
                                class="form-check-input" :class="{ 'is-invalid': errors.acceptTerms }" />
                            <span for="acceptTerms" class="ml-2">Akceptuję politykę prywatności</span>
                        </label>
                        <div class="invalid-feedback">{{ errors.acceptTerms }}</div>
                    </div>
                </div>
            </div>
            <div class="md:col-span-2 mb-3 text-right">
                <button type="submit" class="btn btn-primary mr-1">Wyślij</button>
            </div>
        </div>
    </Form>
</template>

<script>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

export default {
    components: {
        Form,
        Field,
    },
    data() {
        const schema = Yup.object().shape({

            name: Yup.string()
                .required('Podaj imię i nazwisko.'),
            organizacja: Yup.string()
                .required('Podaj nazwę organizacji.'),

            email: Yup.string()
                .required('Adres E-mail jest wymagany.')
                .email('Podaj poprawny adres E-mail'),

            telefon: Yup.string()
                .required('Podaj telefon.'),

            wiadomosc: Yup.string()
                .required('Wpisz wiadomość.'),

            acceptTerms: Yup.string()
                .required('Zgoda jest obowiązkowa')
        });

        return {
            schema
        }
    },
    methods: {
        onSubmit(values) {
            alert('Sukces!! :-)\n\n' + JSON.stringify(values, null, 4));
        }
    }
}
</script>
<style scoped>
input,
textarea {
    width: 100%;
    font-size: 2rem;
    border: 0;
    padding: 0;
    margin: 0;
    line-height: 3.2rem;
    background: transparent;
    width: 100%;
    border-radius: 0 !important;
    border: 0;
    border-bottom: 2px solid #000;
    margin-bottom: 8px;
    padding: 0 0 5px;
}

input[type='checkbox'] {
    width: inherit;
}

input::placeholder,
textarea::placeholder {
    color: #fff;
}

label {
    font-size: 1rem;
}

.invalid-feedback {
    color: red;
    font-size: 1rem;
    position: absolute;
}
</style>