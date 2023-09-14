
<template>
  <button @click="navigate">{{ label }}</button>
</template>

<script setup>
import { ref } from 'vue';

// Props declaration
const props = defineProps({
  label: String,
  href: String,
});

// Navigation function
const navigate = () => {
  window.location.href = props.href;
};
</script>

<style scoped>
    button {
        padding: 10px 20px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    button:hover {
        background-color: #0056b3;
    }
</style>