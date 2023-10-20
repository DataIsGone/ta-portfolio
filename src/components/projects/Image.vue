<script setup>
    import { defineProps, ref } from 'vue';
    
    const props = defineProps({
        exDesc: {
            type: String,
            required: true
        },
        exImg: {
            type: String,
            required: true
        }
    });

    const showLightbox = ref(false);

</script>

<template>
    <div class="ex">
        <!-- Image that triggers the lightbox -->
        <img :src="exImg" alt="Thumbnail" class="thumbnail" @click="showLightbox = true">

        <!-- Lightbox -->
        <div v-if="showLightbox" class="lightbox" @click="showLightbox = false">
        <img :src="exImg" :alt="exDesc" class="lightbox-image">
        </div>
        <br>
        <span><em>{{ exDesc }}</em></span>
    </div>
</template>
  
<style scoped>
    .ex {
        padding: 1em;
    }

    /* .ex img {
        max-height: 500px;
        max-width: 500px;
    } */

    .thumbnail {
        cursor: pointer;
        max-height: 500px;
        max-width: 500px;
    }

    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .lightbox-image {
        max-width: 90%;
        max-height: 90%;
        border: 5px solid white;
        border-radius: 3px;
    }

@media screen and (max-width: 575px) { 
    .ex {
        width: 100%;
        margin: 0 auto;
    }    
}
</style>