<script setup>
import IconLink from '../IconLink.vue'

import { ref, onMounted } from 'vue';

const bio = ref([]);
const socialMedia = ref([]);

onMounted(async () => {
  const bioResponse = await fetch('src/assets/bio.json');
  bio.value = await bioResponse.json();
  const smResponse = await fetch('src/assets/socialmedia.json');
  socialMedia.value = await smResponse.json();
});

</script>

<template>
  <!-- Place this area in its own component -->
  <div class="row">
    <div class="col-sm"></div>
  </div>
  <div class="row">
    <div class="col-sm">
      <span>{{ bio.bio }}</span>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <IconLink v-for="(socialMedia, index) in socialMedia"
        :key="index"
        :link="socialMedia.url"
        :iconClass="socialMedia.icon">
      </IconLink>
    </div>
  </div>
</template>

<style scoped>
</style>
