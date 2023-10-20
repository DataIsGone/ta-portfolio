<script setup>
  import Card from '../Card.vue';
  import { ref, onMounted, computed } from 'vue';

  // FILTER
  const filterTag = ref(null);                                    // Tag currently selected for filtering
  const items = ref([]);

  const fetchData = async() => {
    try {
      const response = await fetch('/src/assets/projectcards.json');  // Ensure the correct path
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
</script>

<template>
  <div class="container-fluid">
    <div class="align">
    <h1>Projects</h1>
    <hr>
    <nav class="navbar-filter">
      <div class="wrap">
        <span>Filter by Tag: </span>
          <a @click="resetFilter">All</a>
          <span>&nbsp;&nbsp;</span>
      </div>
      <div v-for="(tag, index) in uniqueTags" :key="tag" class="wrap">
        <a @click="filterByTag(tag)">
          <span>{{ tag }}</span>
          <span v-if="index != uniqueTags.length - 1">&nbsp;&nbsp;</span>
        </a>
      </div>
    </nav>
  </div>
  </div>
  <div class="container center">
    <div class="row">
        <Card v-for="(item, index) in filteredItems"
          :key="index"
          :cardTitle="item.name"
          :cardDesc="item.desc"
          :cardImg="item.preview"
          :cardRole="item.role"
          :cardProjId="item.id"/>
    </div>
  </div>
  <div class="spacer"></div>
</template>

<style scoped>
.navbar-filter {
    padding: 20px 20px;
    text-align: left;
}

.spacer {
  height: 5em;
}

.wrap {
  display: inline-block;
}

.center {
  margin: 0 auto;
}

h1 {
  text-align: left;
  padding: 1em 0 0 10px;
}

hr {
  padding: 0 10px;
}
.align {
  margin: 0 5em;
}
</style>