<script setup>
import { ref, computed, onMounted } from 'vue';

const items = ref([]); // Your list of posts with tags
const filterTag = ref(null); // Tag currently selected for filtering

onMounted(async () => {
  const response = await fetch('src/assets/projects.json');
  items.value = await response.json();
  console.log(items.value);
});

// const uniqueTags = computed(() => {
//     if (!Array.isArray(items.value)) {
//         return [];
//     }
//     const allTags = items.value.flatMap(item => item.tags);
//     return [...new Set(allTags)];
// });

// const filteredItems = computed(() => {
//   if (!filterTag.value) {
//     return items.value;
//   }
//   return items.value.filter(item => item.tags.includes(filterTag.value));
// });

// const filterByTag = tag => {
//   filterTag.value = tag;
// };
</script>

<template>
    <div class="row container-fluid">
      <Card v-for="(item, index) in filteredItems"
        :key="index"
        :cardTitle="item.name"
        :cardDesc="item.desc"
        :cardImg="item.img.preview">
      </Card>
    </div>
</template>

<!-- <template>
    <div>
      <nav>
        <a v-for="tag in uniqueTags" :key="tag" @click="filterByTag(tag)">
          {{ tag }}
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
</template> -->

<!-- <script setup>
import Card from '../Card.vue'

import { ref, onMounted } from 'vue';

const items = ref([]);

onMounted(async () => {
  const response = await fetch('src/assets/projects.json');
  items.value = await response.json();
});

</script>

<template>
  <div class="row container-fluid">
    <Card v-for="(item, index) in items"
      :key="index"
      :cardTitle="item.name"
      :cardDesc="item.desc"
      :cardImg="item.img.preview">
    </Card>
  </div>
</template> -->

  
  
  
  
  
  