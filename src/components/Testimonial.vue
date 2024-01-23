<!-- HTML -->
<template>
  <div>
    <!-- Carousel -->
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button 
        type="button"
        data-bs-target="#carouselExampleCaptions"
        aria-current="true"
          data-bs-slide-to="0"
          class="active"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item" v-for="(testimonial, index) in testimonials" :key="index" :class="{ active: index == 0 }">
          <div>
            <img :src="testimonial.image" class="card-img-top" alt="..." />
            <h5>{{ testimonial.name }}</h5>
            <p>{{ testimonial.message }}</p>
          </div>
        </div>
        
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<!-- JavaScript -->
<script>
export default {
  props: ["testimonials"],
  data() {
    return {
      testimonials: this.$store.state.testimonial,
    };
  },
};
</script>

<!-- CSS -->
<style scoped>
.card-group {
  width: 25rem;
  height: 25rem;
  padding: 16px;
  gap: 10px;
}

.row {
  margin: 0 auto;
}

img {
  width: 20rem;
  height: 10rem;
}
</style>
