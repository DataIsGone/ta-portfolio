<template>
    <div class="col-sm-6">
        <a :href="cardURL">
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
       margin: 1em;
       padding: 0; 
    }
  </style>