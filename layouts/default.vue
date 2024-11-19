<template>
    <div>
      <Navbar />
      <main>
        <div class="container">
          <Nuxt />
        </div>
      </main>
    </div> 
  </template>
  
  <script>
  
  import Navbar from '@/components/TheNavbar.vue';
  export default {
    components: {
      Navbar
    }
  }
  </script>
  