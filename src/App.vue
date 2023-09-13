<script >
import AppHeader from './components/AppHeader.vue';
export default {
  components: { AppHeader, },
}
</script>

<template>
  <!-- Header -->
  <AppHeader />
  <router-view></router-view>
</template>

<style></style>