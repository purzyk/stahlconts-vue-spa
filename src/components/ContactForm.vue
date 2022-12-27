<template>
    <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="col-span-1 mb-3">
                <Field name="name" placeholder="Full name" type="text" class="form-control"
                    :class="{ 'is-invalid': errors.name }" />
                <label>Full name</label>
                <div class="invalid-feedback">{{ errors.name }}</div>
            </div>
            <div class="col-span-1 mb-3">
                <Field placeholder="Company" name="organizacja" type="text" class="form-control"
                    :class="{ 'is-invalid': errors.organizacja }" />
                <label>Company</label>
                <div class="invalid-feedback">{{ errors.organizacja }}</div>
            </div>
            <div class="col-span-1 mb-3">
                <Field placeholder="E-mail" name="email" type="text" class="form-control"
                    :class="{ 'is-invalid': errors.email }" />
                <label>E-mail</label>
                <div class="invalid-feedback">{{ errors.email }}</div>
            </div>
            <div class="col-span-1 mb-3">
                <Field placeholder="Phone number" name="telefon" type="text" class="form-control"
                    :class="{ 'is-invalid': errors.telefon }" />
                <label>Phone number</label>
                <div class="invalid-feedback">{{ errors.telefon }}</div>
            </div>
            <div class="md:col-span-2 mb-3">
                <Field placeholder="Message" name="wiadomosc" as="textarea" class="form-control"
                    :class="{ 'is-invalid': errors.wiadomosc }" />
                <label>Message</label>
                <div class="invalid-feedback">{{ errors.wiadomosc }}</div>
            </div>
            <div class="md:col-span-2 mb-3">
                <div class="block">
                    <div class="mt-2">
                        <label class="inline-flex items-center">
                            <Field name="acceptTerms" type="checkbox" id="acceptTerms" value="true" checked
                                class="form-check-input" :class="{ 'is-invalid': errors.acceptTerms }" />
                            <span for="acceptTerms" class="ml-2">I accept the privacy policy</span>
                        </label>
                        <div class="invalid-feedback">{{ errors.acceptTerms }}</div>
                    </div>
                </div>
            </div>
            <div class="md:col-span-2 mb-3 text-right">
                <button type="submit" class="btn btn-primary mr-1">Send</button>
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
                .required('Please add full name.'),
            organizacja: Yup.string()
                .required('Please add company name.'),

            email: Yup.string()
                .required('Email is required.')
                .email('Please add correct address email'),

            telefon: Yup.string()
                .required('Please add phone number.'),

            wiadomosc: Yup.string()
                .required('Please add the message.'),

            acceptTerms: Yup.string()
                .required('This checkbox is required')
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