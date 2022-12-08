<script setup lang="ts">
import { RouterView } from "vue-router";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';


</script>

<template>
   <div>
     <Navbar />
    </div>

  <RouterView />

    <div>
    <Footer />
    </div>
   
</template>

<style>

</style>