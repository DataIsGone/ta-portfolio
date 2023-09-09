<script setup>
import Card from '../Card.vue'
import { ref, onMounted, computed } from 'vue';

const filterTag = ref(null); // Tag currently selected for filtering
const items = ref([]);

const fetchData = async() => {
  try {
    const response = await fetch('/src/assets/projects.json'); // Ensure the correct path
    items.value = await response.json();
    console.log(typeof items.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(fetchData); // Trying to avoid uncaught error in promise

const uniqueTags = computed(() => {
  const allTags = [].concat(...Object.values(items.value).map(item => item.tags).trim());

  return [...new Set(allTags)];
});

const filteredItems = computed(() => {
  if (!filterTag.value) {
    return items.value;
  }
  return items.value.filter(item => item.tags.includes(filterTag.value));
});

const filterByTag = tag => {
  filterTag.value = tag;
};

console.log(uniqueTags);

</script>

<template>
  <div>
    <nav>
      <a v-for="tag in uniqueTags" :key="tag" @click="filterByTag(tag)">
        <span>{{ tag }} </span>
      </a>
    </nav>
    <div class="row container-fluid">
      <Card v-for="(item, index) in filteredItems"
        :key="index"
        :cardTitle="item.name"
        :cardDesc="item.desc"
        :cardImg="item.img.preview">
      </Card>
    </div>
  </div>
</template>

<style scoped>
</style>
