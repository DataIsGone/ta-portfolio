<script setup>
    import { computed } from 'vue';

    const props = defineProps({
        videoId: {
            type: String,
            required: true
        },
        exDesc: {
            type: String,
            required: true
        }
    });

    const videoUrl = computed(() => `https://player.vimeo.com/video/${props.videoId}`);
</script>

<template>
  <div class="video-embed mx-auto">
    <iframe
      :src="videoUrl"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen>
    </iframe>
    <br>
    <span><em>{{ exDesc }}</em></span>
  </div>
</template>

<style scoped>
    .video-embed {
      position: relative;
      padding-bottom: 50%;
      width: 150vh;
      height: 100%;
      overflow: hidden;
      max-width: 100%;
      align-items: center;
      margin: 0 5em;
    }

    .video-embed iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
</style>