<template>
  <h1
    style="
      font-family: 'Manrope', sans-serif;
      display: flex;
      justify-content: center;
      padding-top: 50px;
      color: white;
    "
  >
    References and Peer Reviews
  </h1>
  <div class="testimonial">
    <div class="testimonial-container">
      <Testimonial
        v-for="testimonial of testimonial"
        :key="testimonial.id"
        :testimonial="testimonial"
      />
    </div>
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
  flex-direction: row;
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

.testimonial-container {
  display: flex;
  flex-wrap: wrap;
  width: 80%%;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

h1 {
  margin-bottom: 0;
  text-align: center;
  background-color: #202020;
  color: white;
}
</style>
