<script setup>
import Card from '../Card.vue'

import { ref, onMounted } from 'vue';

const items = ref([]);

onMounted(async () => {
  const response = await fetch('src/assets/projects.json');
  items.value = await response.json();
});

</script>

<template>
  <!-- Place this area in its own component -->
  <div class="row container-fluid">
    <Card v-for="(item, index) in items"
      :key="index"
      :cardTitle="item.name"
      :cardDesc="item.desc"
      :cardImg="item.img.preview">
    </Card>
  </div>
</template>

<style scoped>
</style>
