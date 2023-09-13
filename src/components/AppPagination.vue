<script>
import { store } from "../assets/data/store";
export default {
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <nav>
        <ul class="pagination">
            <li class="page-item" :class="{ 'disabled': !link.url, 'active': link.active }" v-for="link in store.links"
                :key="link.label">
                <button class="page-link" :disabled="!link.url" v-html="link.label"
                    @click="$emit('change-page', link.url)"></button>
            </li>
        </ul>
    </nav>
</template>
<style></style>