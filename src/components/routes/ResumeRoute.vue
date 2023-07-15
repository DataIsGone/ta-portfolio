<template>
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <h1>{{ name }}</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <h2>{{ jobTitle }}</h2>
            </div>
            <div class="col-sm">
                <Button label="Download Resume" href="https://drive.google.com/file/d/1k-svp2RjTd3J2fpwqgGF3THUBBrnHDlA/view?usp=sharing"/>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-sm">
                <h3>Hard Skills</h3>
            </div>
            <div class="col-sm">
                <span v-for="skill in skills" :key="skill">{{ skill }}</span>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-sm">
                <h3>Experience</h3>
            </div>
            <div class="col-sm">
                <div v-for="job in experience" :key="job.company">
                    <h4>{{ job.company }}</h4>
                    <p>{{ job.title }}</p>
                    <p>{{ job.duration }}</p>
                    <p>{{ job.desc }}</p>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-sm">
                <h3>Projects</h3>
            </div>
            <div class="col-sm">
                <div v-for="project in projects" :key="project.name">
                    <h4>{{ project.name }}</h4>
                    <p>{{ project.desc }}</p>
                    <p>{{ project.tasks }}</p>
                    <p>{{ project.date }}</p>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-sm">
                <h3>Education</h3>
            </div>
            <div class="col-sm">
                <div v-for="education in educations" :key="education.school">
                    <h4>{{ education.school }}</h4>
                    <p>{{ education.degree }}</p>
                    <p>{{ education.duration }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
    import Button from '../Button.vue'

    // import { ref } from 'vue';
    import { onMounted, ref } from 'vue';
    
    // Personal Information
    const name = ref('Ryan Davis');
    const jobTitle = ref('Technical Artist');
    
    // Skills
    const skills = ref(['JavaScript', 'Vue.js', 'Node.js']);
    
    // Experience
    const experience = ref([
        {
            company: 'Company A',
            title: 'Senior Developer',
            duration: '2021 - Present',
            desc: 'Implemented several major features using Vue.js and Node.js.',
        },
        {
            company: 'Company B',
            title: 'Junior Developer',
            duration: '2018 - 2021',
            desc: 'Worked on front-end development with a focus on improving user experience.',
        },
    ]);

    // Projects
    const projects = ref([
        {
            name: 'Project A',
            desc: 'Hackathon 1',
            tasks: 'art probably',
            date: '2021 - Present',
        },
        {
            name: 'Project B',
            desc: 'Hackathon 2',
            tasks: 'programming probably',
            date: '2021 - Present',
        },
    ]);
    
    // Education
    const educations = ref([
        {
            school: 'University of ABC',
            degree: 'Bachelor of Science in Computer Science',
            duration: '2014 - 2018',
        },
    ]);
</script>
  
  <style scoped>
  .resume {
    width: 80%;
    margin: 0 auto;
    font-family: Arial, sans-serif;
  }
  </style>