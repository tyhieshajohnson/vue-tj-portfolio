<!-- HTML -->
<template>
  <div class="card card-group" style="width: 25rem; background-color: #3b3b3b">
    <div class="row g-0">
      <img :src="testimonial.image" class="card-img-top" alt="..." />
      <div style="display: inline; justify-content: center">
        <h5 style="color: #ffdb58">{{ testimonial.name }}</h5>
        <p style="font-size: small; color: white">{{ testimonial.message }}</p>
        <p style="font-size: xx-small; color: white">
          Contact Information: {{ testimonial.reference }}
        </p>
      </div>
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
  height: 27rem;
  padding: 20px;
  gap: 10px;
  margin-top: 35px;
  box-shadow: 10px 10px 5px grey;
  transform: translateY(0);
  transition: transform 0.5s;
}

.card-group:hover {
  transform: translateY(-20px);
  box-shadow: 10px 10px 5px #ffdb58;
}

.row {
  margin: 0 auto;
}

img {
  width: 20rem;
  height: 15rem;
  justify-content: center;
  display: flex;
  margin: 0 auto;
  opacity: 0.5;
  filter: grayscale(100%);
}

img:hover {
  opacity: 1;
  transition: opacity 0.5s;
  filter: none;
}

h5 {
  margin-top: 5px;
  display: flex;
  justify-content: center;
}

p {
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 480px) {
  .card-group {
  width: 20rem;
  height: 30rem;
  padding: 20px;
  gap: 10px;
  margin-top: 35px;
  box-shadow: 10px 10px 5px grey;
  transform: translateY(0);
  transition: transform 0.5s;
}

.card-group:hover {
  transform: translateY(-20px);
  box-shadow: 10px 10px 5px #ffdb58;
}

.row {
  margin: 0 auto;
}

img {
  width: 15rem;
  height: 15rem;
  justify-content: center;
  display: flex;
  margin: 0 auto;
  opacity: 0.5;
  filter: grayscale(100%);
}

img:hover {
  opacity: 1;
  transition: opacity 0.5s;
  filter: none;
}

h5 {
  margin-top: 5px;
  display: flex;
  justify-content: center;
}

p {
  display: flex;
  justify-content: center;
}
}
</style>
