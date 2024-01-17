<!-- HTML -->
<template>
  <div class="card-body col">
    <img :src="project.image"/>
    <h5 class="card-title">{{ project.heading }}</h5>
    <p class="card-text">{{ project.text }}</p>
    <a href="project.deploy" class="btn btn-primary">Netlify</a>
    <a href="project.github" class="btn btn-primary">Github</a>
  </div>
</template>

<!-- JavaScript -->
<script>
export default {
  props: ["project"],
};
</script>

<!-- CSS -->
<style scoped></style>
