<template>
  <div class="resume">
    <div class="body">
      <h1 class="body" style="font-family: 'Manrope', sans-serif; justify-content: center;
    display: flex; color: white;">Resume</h1>
    </div>
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
    Resume
  },
  computed: {
    resume() {
      return this.$store.state.resume;
      // Run two components into one view
      // return (this.$store.state.resume || []).filter(resume => resume.skills == this.skills );
      // return (this.$store.state.resume || []).filter(resume => resume.type == this.type );
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