<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from "@/components/Navbar.vue";
import Contact from "@/components/Contact.vue";
</script>

<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
  <Contact />
</template>

<style scoped></style>
