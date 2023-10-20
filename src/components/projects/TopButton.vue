<script setup>
    const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    }
</script>

<template>
    <button @click="scrollToTop" id="backToTopBtn">Back to Top</button>
</template>

<style scoped>
    #backToTopBtn {
    position: fixed;   /* Fixed/sticky position */
    bottom: 20px;      /* Place the button at the bottom of the page */
    right: 20px;       /* Place the button 20px from the right */
    z-index: 99;       /* Make sure it doesn't overlap other items */
    border: none;      /* Remove borders */
    outline: none;     /* Remove outline */
    background-color: #555;  /* Set a background color */
    color: white;      /* White text color */
    cursor: pointer;   /* Mouse pointer on hover */
    padding: 15px;     /* Some padding */
    border-radius: 10px;  /* Rounded corners */
    font-size: 18px;   /* Increase font size */
    }

    #backToTopBtn:hover {
    background-color: #555; /* Add a dark-grey background on hover */
    }
</style>