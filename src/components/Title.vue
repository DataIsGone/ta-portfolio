<template>
  <div class="container-fluid intro-section py-5 no-space titleBar">
      <div class="container">
          <div class="row align-items-center">
              <!-- Image Column -->
              <div class="col-md-6 no-space">
                  <img src="src/assets/img/ta_logo.png" alt="Profile Image" class="img-fluid">
              </div>
              <!-- Text Column -->
              <div class="col-md-6 no-space">
                  <h3>Hey I'm Ryan (she/her)!</h3>
                  <h5>I'm a tech artist looking to grow in tools and materials/shaders for games.</h5>
                  <p class="lead">meeeeeeeeeeeee</p>
              </div>
          </div>
      </div>
  </div>
</template>
  
  <script>
  export default {
    name: 'Title'
  };
  </script>
  
  <style scoped>
    .titleBar {
        background-color: #000000;
    }

    img {
      margin: 0 auto;
    }

    .img-fluid {
      margin: 0;
      padding: 10px 0;
    }

    h3, h5 {
      color: white;
    }
    .no-space {
      padding: 0 !important;
      margin: 0 !important;
    }
  </style>