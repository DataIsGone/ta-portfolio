<script>
import { useRouter } from 'vue-router';

export default {
    name: 'Card',
    props: {
        cardTitle: 'Card Title',
        cardDesc: 'Card Desc',
        cardProjId: -1,
        cardImg: '#'
    },
    setup() {
        const router = useRouter()
        const goToPage = (pageId) => {
            router.push({
                path: `/project/${pageId}` 
            })
        }
        return { goToPage }
    }
};
</script>

<template>
    <div class="col-sm-6">
        <a href="#" @click.prevent="goToPage(cardProjId)">
            <div class="card bg-dark text-white">
                <img class="card-img" :src="cardImg" alt="Card image">
                <div class="card-img-overlay">
                    <h5 class="card-title">{{ cardTitle }}</h5>
                    <p class="card-text">{{ cardDesc }}</p>
                </div>
            </div>
        </a>
    </div>
</template>
  
<style scoped>
    .card {
        margin: 1em;
        padding: 0; 
    }
</style>