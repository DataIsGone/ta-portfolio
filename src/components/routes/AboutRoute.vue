<script setup>
import IconLink from '../IconLink.vue'

import { ref, onMounted } from 'vue';

const about = ref([]);
const socialMedia = ref([]);

onMounted(async () => {
  const aboutResponse = await fetch('src/assets/about.json');
  about.value = await aboutResponse.json();
  const smResponse = await fetch('src/assets/socialmedia.json');
  socialMedia.value = await smResponse.json();
});

</script>

<template>
  <div class="row">
    <div class="col-sm"></div>
    <div class="col-sm">
      <span v-html="about.bio"></span>
    </div>
  </div>
  
  <div class="row">
    <!-- ACCOMPLISHMENTS -->
    <div class="col-sm">
      <span v-for="(accomplishment, index) in about.accomplishments" :key="index">
        <span v-html="accomplishment"></span>
        <br v-if="index < about.accomplishments.length - 1" />
      </span>
    </div>
  </div>
  
  <!-- SOCIAL MEDIA -->
  <div class="row">
    <div class="col-sm">
      <IconLink class="icon" v-for="(socialMedia, index) in socialMedia"
        :key="index"
        :link="socialMedia.url"
        :iconClass="socialMedia.icon">
      </IconLink>
    </div>
  </div>
</template>

<style scoped>
  .row {
    padding: 1em 3em;
  }
</style>
