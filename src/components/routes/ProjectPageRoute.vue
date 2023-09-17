<script setup>
    import ProjNav from '../projects/ProjectNav.vue';

    import { ref, onMounted, computed } from 'vue';
    import { useRoute } from 'vue-router';
  
    const route = useRoute();
    const contents = ref({});
  
    onMounted(async () => {
        const response = await fetch('/src/assets/projects.json');
        contents.value = await response.json();
    });
    
    const currProj = computed(() => {
        const projId = route.query.projId;
        return contents.value[projId] || 'Default content';
    });
</script>

<template>
    <div class="section">
      <h1>{{ currProj.projTitle }}</h1>
    </div>
    <div class="section">
        <ProjNav></ProjNav>
    </div>
    <div class="section" v-html="currProj.projDesc"></div>
</template>

<style scoped>
    .section {
        padding: 1em;
    }
</style>