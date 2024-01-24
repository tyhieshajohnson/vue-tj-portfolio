<template>
    <div class="testimonial">
      <Testimonial
      v-for="testimonial of testimonial"
      :key="testimonial.id" 
      :testimonial="testimonial"
    />
    </div>

  </template>

<script>
import Testimonial from "@/components/Testimonial.vue";

export default {
  name: "testimonial",
  components: {
    Testimonial,
  },
  computed: {
    testimonial() {
      return this.$store.state.testimonial;
    },
  },

  mounted() {
    this.$store.dispatch("getTestimonial");
  },
};
</script>

<!-- CSS -->
<style scoped>
.testimonial {
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