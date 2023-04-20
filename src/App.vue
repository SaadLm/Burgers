<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavComponent from '@/components/NavComponent.vue'

</script>

<template>
  <header>


    <div class="wrapper">
      <NavComponent/>

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
       -->
    </div>
  </header>



  <RouterView />
</template>

<style scoped>

</style>
