<template>
  <div class="resume">
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
