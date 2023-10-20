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
<!-- Container for the entire grid -->
<div class="container">

<!-- 2x1 Grid: Image on left, Text on right -->
  <div class="row mb-5">
    <br>
    <hr>
    <div class="col-lg-4">
      <h3>Contact Me</h3>
      <button>
        <span>
          <span>ryan.alex.davis</span>
          <br>
          <span>@ gmail</span>
        </span>
        </button>
        <br><br>
          <span class="icon" v-for="(socialMedia, index) in socialMedia" :key="index">
            <IconLink
              :link="socialMedia.url"
              :iconClass="socialMedia.icon">
            </IconLink>
            <span>This link</span>
            <br>
          </span>
      </div>
      <div class="col-lg-7">
        <!-- BIO -->
        <h3>Bio</h3>
        <span class="section-text" v-html="about.bio"></span>
        <hr>
        <!-- RECOGNITION -->
        <h3>Recognition</h3>
        <span v-for="(accomplishment, index) in about.accomplishments" :key="index">
          <span class="section-text" v-html="accomplishment"></span>
          <br v-if="index < about.accomplishments.length - 1" />
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* .row {
    padding: 1em 3em;
  } */

  /* .col-sm {
    margin: 0;
  } */

  .section-text {
    text-align: left;
    /* text-justify: inter-word; */
  }
  .section-link {
    text-align: left;
  }
  .section-icon {
    text-align: right;
  }
</style>
