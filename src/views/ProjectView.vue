<!-- HTML -->
<template>
  <div>
    <h1>Projects</h1>
    <div class="projects">
    <Projects
      v-for="project of projects"
      :key="projects.id"
      :project="project"
    />
  </div>
  </div>
</template>

<!-- JavaScript -->
<script scoped>
import Projects from "@/components/Projects.vue";

export default {
  name: "ProjectView",
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
<style scoped>
.projects {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  /* margin-right: auto;
  margin-left: auto; */
  justify-content: space-evenly;
  align-items: center;
  gap: 0;
  padding-bottom: 60px;
  background-color: #202020;
}

h1 {
  margin-bottom: 0;
  text-align: center;
  background-color: #202020;
  color: white;
}
</style>
