<template>
  <div class="resume">
    <h1 class="body" style="font-family: 'Manrope', sans-serif; justify-content: center;
    display: flex; color: white;">Resume</h1>
    <Resume
      v-for="resume of resume"
      :key="resume.id" 
      :resume="resume"
    />
  </div>
</template>

<!-- JavaScript -->
<script>
import Resume from "@/components/Resume.vue";

export default {
  name: "ResumeView",
  components: {
    Resume,
  },
  computed: {
    resume() {
      return this.$store.state.resume;
    },
  },

  mounted() {
    this.$store.dispatch("getResume");
  },
};
</script>

<!-- CSS -->
<style scoped>
.body {
  background-color: #202020;
}
</style>