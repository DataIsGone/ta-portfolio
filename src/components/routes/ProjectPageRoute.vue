<script setup>
    import ProjNav from '../projects/ProjectNav.vue';
    import ExImage from '../projects/Image.vue'
    import ExVideo from '../projects/Video.vue'
    import Title from '../projects/AnchorTitle.vue'
    import Overview from '../projects/Overview.vue'
    import TopButton from '../projects/TopButton.vue';

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
    <!-- Individual Navigation Area -->
    <div class="section sticky-top title">
      <h1>{{ currProj.projTitle }}</h1>
      <ProjNav></ProjNav>
    </div>

    <!-- Individual Project Overview -->
    <div class="section" id="Overview">
        <Title secTitle="Overview"></Title>
        <Overview :content="currProj.projOverview"></Overview>
    </div>


    <!-- Individual Content -->
    <div
        class="section"
        :id="projName"
        v-for="(projContent, projName) in currProj.projContent"
        :key="projName"
    >
        <Title :secTitle="projName"></Title>
        <p class="section-text">{{ projContent.desc }}</p>
        <br>
        <div v-if="projContent.subdesc">
            <br>
            <div v-for="sec in projContent.subdesc" :key="sec">
                <h4>{{ sec.title }}</h4>
                <div>{{ sec.desc }}</div>
                <br>
                <div class="row">
                    <div v-for="(img, imgIndex) in sec.img" :key="imgIndex" class="col-sm">
                        <ExImage :exImg="img[0]" :exDesc="img[1]"></ExImage>
                    </div>
                </div>
                <br><br><br>
            </div>
        </div>
        <div v-else class="fluid-container">
            <div class="row">
                <div v-if="'video' in projContent">
                    <div v-for="(video, vidIndex) in projContent.video" :key="vidIndex">
                        <ExVideo :videoId="video[0]" :exDesc="video[1]"></ExVideo>
                    </div>
                </div>
                <div v-else v-for="(img, imgIndex) in projContent.img" :key="imgIndex" class="col-sm">
                    <ExImage :exImg="img[0]" :exDesc="img[1]"></ExImage>
                </div>
            </div>
        </div>
    </div>

    <TopButton></TopButton>
</template>

<style scoped>
    .section {
        padding: 1em 5em;
    }

    .section-text {
        text-align: left;
        margin: 0 5em;
    }
    
    .title {
        background-color: white;
    }

    .spacer {
        height: 5em;
    }
</style>