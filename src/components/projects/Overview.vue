<script setup>
    import { defineProps } from 'vue';
    const { content } = defineProps(['content']);
</script>

<template>
    <ul>
        <li v-for="(item, index) in content" :key="index">
            <span v-if="index == content.length - 1">
                <strong>{{ item[0] }}</strong>:
                <br>{{ item[1] }}
            </span>
            <span v-else><strong>{{ item[0] }}</strong>: {{ item[1] }}</span>

        </li>        
    </ul>    
</template>

<style scoped>
    ul {
        display: table;
        margin: 0 5em;
        text-align: left;
    }
</style>