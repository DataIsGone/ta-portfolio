<script setup>
    import { ref, onMounted, computed } from 'vue';
    import { useRoute } from 'vue-router';
  
    const route = useRoute();
    const contents = ref({});
  
    onMounted(async () => {
        const response = await fetch('/src/assets/projects.json');
        contents.value = await response.json();
    });
    
    const currentContent = computed(() => {
        const projId = route.query.projId;
        return contents.value[projId] || 'Default content';
    });
</script>

<template>
    <div>
      <h1>Dynamic Content</h1>
      <p>{{ currentContent.projDesc }}</p>
    </div>
</template>