<!-- HTML -->
<template>
  <div class="card card-group" style="width: 25rem; background-color: #3b3b3b;">
    <div class="row g-0">
      <img :src="testimonial.image" class="card-img-top" alt="..." />
      <h5 style="color: #ffdb58;">{{ testimonial.name }}</h5>
      <p style="font-size: small; color: white;">{{ testimonial.message }}</p>
    </div>
  </div>
</template>

<!-- JavaScript -->
<script>
export default {
  props: ["testimonial"],
};
</script>

<!-- CSS -->
<style scoped>
.card-group {
  width: 25rem;
  height: 25rem;
  padding: 16px;
  gap: 10px;
  margin-top: 35px;
}

.row {
  margin: 0 auto;
}

img {
  width: 20rem;
  height: 10rem;
  justify-content: center;
  display: flex;
}
</style>
