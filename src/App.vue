<script setup>
import Title from './components/Title.vue'
import Navbar from './components/Nav.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <Title></Title>
  <Navbar></Navbar>
  
  <router-view></router-view>

  <Footer></Footer>
</template>

<style scoped>
</style>
