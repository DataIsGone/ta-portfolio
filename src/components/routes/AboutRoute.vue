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
  <div class="row container-fluid">
    <!-- Bio Pic -->
    <div class="col-sm">
      <img :src="bio.pic">
    </div>
    <!-- Bio Text -->
    <div class="col-sm">
      <p>{{ bio.text.first }}</p>
      <p>{{ bio.text.second }}</p>
      <p>{{ bio.text.third }}</p>
    </div>
  </div>
  <div class="row">
    <div class="col-sm bio-text">
      <IconLink v-for="(socialMedia, index) in socialMedia"
        :key="index"
        :link="socialMedia.url"
        :iconClass="socialMedia.icon">
      </IconLink>
    </div>
  </div>
</template>

<style scoped>
  .row {
    padding: 2vh 0 5vh 0;
  }
  .col-sm {
    padding: 0 10vh;
  }
</style>
