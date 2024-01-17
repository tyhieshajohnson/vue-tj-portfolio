<!-- HTML -->
<template>
  <div class="projects">
    <h1>Projects</h1>
    <Projects
      v-for="project of projects"
      :key="projects.id"
      :project="project"
    />
  </div>
</template>

<!-- JavaScript -->
<script scoped>
import Projects from "@/components/Projects.vue";

export default {
  name: "AboutView",
  components: {
    Projects,
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },

  mounted() {
    this.$store.dispatch("getProjects");
  },
};
</script>

<!-- CSS -->
<style scoped></style>
