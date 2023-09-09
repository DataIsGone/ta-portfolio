<template>
    <div class="col-sm-4">
        <a :href="cardURL">
            <div class="card bg-dark text-white align-self-start">
                <img class="card-img-top" :src="cardImg" alt="Card image">
                <div class="card-body">
                    <h5 class="card-title">{{ cardTitle }}</h5>
                    <p class="card-text">{{ cardDesc }}</p>
                </div>
            </div>
        </a>
    </div>
</template>
  
  <script>
  export default {
    name: 'Card',
    props: {
        cardTitle: 'Card Title',
        cardDesc: 'Card Desc',
        cardURL: '#',
        cardImg: '#'
    }
  };
  </script>
  
<style scoped>
    .card {
        margin: 0.5em;
        padding: 0;
    }
  </style>