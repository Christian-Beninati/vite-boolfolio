<script>
export default {
    props: { project: Object }
}
</script>
<template>
    <div class="card mt-5 p-3 h-100">
        <img v-if="project.image" :src="project.image" :alt="project.title" class="img-fluid" s>
        <div class="card-body">
            <h4>{{ project.title }}<span class="badge rounded-pill bg-primary fs-6 ms-1"
                    v-for="technology in project.technologies">
                    {{ technology.label }}
                </span></h4>
            <p class="card-text">{{ project.description }}</p>
            <a :href="project.url" class="btn btn-primary">Go to GitHub</a>
        </div>
    </div>
</template>
<style></style>