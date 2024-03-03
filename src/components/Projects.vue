<!-- HTML -->
<template>
  <div class="card" style="margin-top: 100px;">
    <img :src="project.image" alt="..." />
    <div class="info">
      <div class="name">{{ project.heading }}</div>
      <div class="description">{{ project.description }}</div>
    </div>
  </div>
</template>

<!-- JavaScript -->
<script>
export default {
  props: ["project"],
};
</script>

<!-- CSS -->
<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f0f0f0;
}

.card {
  position: relative;
  width: 700px;
  height: 400px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(244, 240, 7, 0.1);
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: translateY(-10px);
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.card:hover .info {
  opacity: 1;
}

.name {
  font-size: 1.5em;
  margin-bottom: 5px;
}

.description {
  font-size: 1em;
}
</style>