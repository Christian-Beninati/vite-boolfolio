<script>
import axios from "axios";
const endpoint = "http://127.0.0.1:8000/api/contact-message";
const emptyForm = { email: "", subject: "", content: "", subscription: false, };
export default {
    data: () => ({
        form: emptyForm,
    }),
    methods: {
        sendForm() {
            axios.post(endpoint, this.form)
                .then(() => { this.form = emptyForm })
                .catch((err) => { console.error(err) })
                .then(() => { })
        }
    }
};
</script>

<template>
    <div class="container">
        <h2 class="my-4">Contact us</h2>
        <!-- Form Contatti -->
        <form @submit.prevent="sendForm">
            <!-- Email -->
            <div class="mb-3">
                <label for="email" class="form-label">Your email<sup class="text-danger">*</sup></label>
                <input type="email" class="form-control" id="email" placeholder="example@hello.com"
                    v-model.trim="form.email">
            </div>

            <!-- Oggetto -->
            <div class="mb-3">
                <label for="subject" class="form-label">Subject of the email<sup class="text-danger">*</sup></label>
                <input type="text" class="form-control" id="subject" v-model.trim="form.subject">
            </div>

            <!-- Messaggio -->
            <div class="mb-3">
                <label for="message" class="form-label">Content of the email<sup class="text-danger">*</sup></label>
                <textarea class="form-control" id="message" rows="5" v-model.trim="form.content"></textarea>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="subscription" v-model="form.subscription">
                <label class="form-check-label" for="subscription">
                    Sign up for the newsletter
                </label>
            </div>
            <div>
                <button class="btn btn-primary mt-4">Send</button>
            </div>
        </form>
    </div>
</template>

<style scoped></style>