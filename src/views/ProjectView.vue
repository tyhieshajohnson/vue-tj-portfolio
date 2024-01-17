<!-- HTML -->
<template>
  <div class="projects">
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
<style scoped>
.projects {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-bottom: 60px;
  background-color: #202020;
}
</style>
