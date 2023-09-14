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
/* .logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
