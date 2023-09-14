<script setup>
    import { ref, watch, onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const layout = ref(route.query.layout || 'default');
    const pageContent = ref({
        title: 'Default',
        content: 'Default content'
    });

    const fetchData = async () => {
        const response = await fetch(
            '/src/assets/projects.json'
        );
        const data = await response.json();
        pageContent.value = data[layout.value] || {
            title: 'Default',
            content: 'Default content'
        };
    };

    watch(route, () => {
        layout.value = route.query.layout || 'default';
        fetchData();
    });
</script>

<template>
    <div>
        <h1>{{ pageContent.title }}</h1>
        <div>{{ pageContent.title }}</div>
    </div>
</template>

<style scoped>
    
</style>