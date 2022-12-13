<script setup lang="ts">
import { RouterView } from "vue-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({
  selector: "body", //element to add attribute to
  attribute: "theme", // attribute name
  valueDark: "custom-dark", // attribute value for dark mode
  valueLight: "custom-light", // attribute value for light mode
});



const toggleDark = useToggle(isDark);

</script>

<template>
   <div>
     <Navbar />

     <p>Dark theme: {{isDark}}</p>
     <button @click="toggleDark()"> Dark Mode </button>

    </div>

  <RouterView />

    <div>
    <Footer />
    </div>
   
</template>

<style scoped>
[theme="custom-dark"]  {
  background: #3d3d3d;
  color: rgb(236, 227, 227);
}

</style>