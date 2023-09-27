<script>
    import { useRouter } from 'vue-router';

    export default {
        name: 'Card',
        props: {
            cardTitle: String,
            cardDesc: String,
            cardProjId: Number,
            cardImg: String,
            cardRole: String
        },
        setup(props) {
            const router = useRouter()
            const goToPage = (pageId) => {
                router.push({
                    path: `/project/`,
                    query: {projId: pageId}
                })
            }
            return { goToPage }
        }
    };
</script>

<template>
    <div class="card mb-3">
        <img class="card-img-top" :src="cardImg" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ cardTitle }}</h5>
            <p class="card-text">{{ cardDesc }}</p>
            <p class="card-text" v-html="cardRole"></p>
            <a href="#" @click.prevent="goToPage(cardProjId)">
                <p>(learn more)</p>
            </a>
        </div>
    </div>
</template>
  
<style scoped>
    .card {
        margin: 1em;
        padding: 0; 
    }
</style>