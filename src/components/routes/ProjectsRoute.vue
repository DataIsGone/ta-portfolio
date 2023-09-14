<script setup>
  import Card from '../Card.vue';
  import { ref, onMounted, computed } from 'vue';

  const filterTag = ref(null);                                    // Tag currently selected for filtering
  const items = ref([]);

  const fetchData = async() => {
    try {
      const response = await fetch('/src/assets/projects.json');  // Ensure the correct path
      items.value = await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  onMounted(fetchData);                                          // Trying to avoid uncaught error in promise

  const uniqueTags = computed(() => {
    const allTags = [].concat(...Object.values(items.value).map(item => item.tags));
    return [...new Set(allTags)].sort();
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

  const resetFilter = () => {
    filterTag.value = null;
  };

  console.log(filteredItems);
</script>

<template>
  <div class="container-fluid">
    <nav class="navbar-filter">
      <span>Filter by Tag: </span>
      <a @click="resetFilter">All</a>
      <span>&nbsp;&nbsp;</span>
      <a v-for="(tag, index) in uniqueTags" :key="tag" @click="filterByTag(tag)">
        <span>{{ tag }}</span>
        <span v-if="index != uniqueTags.length - 1">&nbsp;&nbsp;</span>
      </a>
    </nav>
  </div>
  <div class="container">
    <div class="row">
        <Card v-for="(item, index) in filteredItems"
          :key="index"
          :cardTitle="item.name"
          :cardDesc="item.desc"
          :cardImg="item.preview"
          :cardProjId="item.projId">
        </Card>
    </div>
  </div>
  <div class="spacer"></div>
</template>

<style scoped>
.navbar-filter {
    padding: 10px 20px;
    text-align: left;
}

.spacer {
  height: 5em;
}
</style>