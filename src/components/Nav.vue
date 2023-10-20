<template>
    <nav class="navbar sticky-top navbar-expand-xl">
        <span class="navbar-brand">Ryan Davis</span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item navlink-spacer">
                    <router-link class="nav-link" to="/projects">Projects</router-link>
                </li>
                <li class="nav-item navlink-spacer">
                    <router-link class="nav-link" to="/resume">Resume</router-link>
                </li>
                <li class="nav-item navlink-spacer">
                    <router-link class="nav-link" to="/about">About</router-link>
                </li>
            </ul>
        </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  };
  </script>
  
<style scoped>
    .navbar {
        padding: 1em 20px;
        background-color: black;
    }
    .navlink-spacer {
        padding: 0 1em;
    }

    span, .nav-link {
        color: white;
    }
</style>