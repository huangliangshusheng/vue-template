<template>
    <Navbar />
    <slot />
    <Footer />
</template>

<script setup lang="ts">
import Footer from "../atoms/Footer.vue";
import Navbar from "../organisms/Navbar.vue";
</script>
