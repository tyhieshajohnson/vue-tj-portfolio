<!-- HTML -->
<template>
  <div class="resume body">
      <h1
        class="body"
        style="
          font-family: 'Manrope', sans-serif;
          justify-content: center;
          display: flex;
          color: white;
        "
      >
        Resume
      </h1>
    <div>
      <h3
      style="
          font-family: 'Manrope', sans-serif;
          justify-content: center;
          display: flex;
          color: white;
        "
      >My Educational & Career Background</h3>
      <Resume v-for="resume of resume" :key="resume.id" :resume="resume" />
    </div>
      <Skills v-for="skills of skills" :key="skills.id" :skills="skills" />
  </div>
</template>

<!-- JavaScript -->
<script>
import Resume from "@/components/Resume.vue";
import Skills from "@/components/Skills.vue";

export default {
  name: "ResumeView",
  components: {
    Resume,
    Skills,
  },
  computed: {
    resume() {
      return this.$store.state.resume;
      return this.$store.state.skills;
    },
  },

  mounted() {
    this.$store.dispatch("getResume");
    this.$store.dispatch("getSkills");
  },
};
</script>

<!-- CSS -->
<style scoped>
.body {
  background-color: #202020;
}
</style>
