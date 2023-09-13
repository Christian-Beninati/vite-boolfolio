<script>
import axios from "axios";
const endpoint = "http://127.0.0.1:8000/api/contact-message";
const emptyForm = { email: "", subject: "", content: "", subscription: false, };
export default {
    data: () => ({
        form: emptyForm,
        errors: {},
        successMessage: null,

    }),
    computed: {
        hasErrors() {
            return Object.keys(this.errors).length;
        },
        showAlert() {
            return Boolean(this.hasErrors || this.successMessage);
        },
        alertType() {
            return this.hasErrors ? "danger" : "success"
        }
    },
    methods: {
        sendForm() {
            this.successMessage = null;
            this.validateForm();
            if (this.hasErrors) return;
            axios.post(endpoint, this.form)
                .then(() => {
                    this.form = { emptyForm };
                    this.successMessage = "Message sent successfully!";
                })
                .catch((err) => {
                    if (err.response.status === 400) {
                        const errors = err.response.data.errors;
                        const errorMessages = {};
                        for (let key in errors) errorMessages[key] = errors[key][0];
                        this.errors = errorMessages;
                    } else {
                        console.error(err);
                        this.errors = { network: "An error has occurred!" }
                    }
                })
                .then(() => { })
        },
        validateForm() {
            this.errors = {};
            // Valido email
            if (!this.form.email) {
                this.errors.email = "E-mail is required";
            } else if (!this.form.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                this.errors.email = "The email does not have a valid format";
            }
            // Valido il subject
            if (!this.form.subject) {
                this.errors.subject = "The email must contain the subject line";
            }
            // Valido il content
            if (!this.form.content) {
                this.errors.content = "The e-mail must contain a content";
            }
        }

    }
};
</script>

<template>
    <div class="container">
        <h2 class="my-4">Contact us</h2>

        <!-- Alert -->
        <div v-if="showAlert" class="alert" :class="`alert-${alertType}`" role="alert">
            <div v-if="successMessage">{{ successMessage }}</div>
            <ul v-if="hasErrors">
                <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
            </ul>
        </div>

        <!-- Form Contacts -->
        <form @submit.prevent="sendForm" novalidate>
            <!-- Email -->
            <div class="mb-3">
                <label for="email" class="form-label">Your email<sup class="text-danger">*</sup></label>
                <input type="email" class="form-control" :class="{ 'is-invalid': errors.email }" id="email"
                    placeholder="example@hello.com" v-model.trim="form.email">
                <div class="invalid-feedback">
                    {{ errors.email }}
                </div>
            </div>

            <!-- Object -->
            <div class="mb-3">
                <label for="subject" class="form-label">Subject<sup class="text-danger">*</sup></label>
                <input type="text" :class="{ 'is-invalid': errors.subject }" class="form-control" id="subject"
                    v-model.trim="form.subject">
                <div class="invalid-feedback">
                    {{ errors.subject }}
                </div>
            </div>

            <!-- Message -->
            <div class="mb-3">
                <label for="content" class="form-label">Content<sup class="text-danger">*</sup></label>
                <textarea class="form-control" :class="{ 'is-invalid': errors.content }" id="content" rows="5"
                    v-model.trim="form.content"></textarea>
                <div class="invalid-feedback">
                    {{ errors.content }}
                </div>
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