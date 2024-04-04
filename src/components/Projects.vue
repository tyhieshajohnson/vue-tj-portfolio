<!-- HTML -->
<template>
  <div class="body">
    <div class="card">
      <img :src="project.image" alt="" />
      <div class="card-content">
        <h2>
          {{ project.heading }}
        </h2>
        <p>
          {{ project.description }}
        </p>
        <a
          target="_blank"
          :href="project.deploy"
          class="material-symbols-outlined button"
        >
          Netlify
        </a>
        <a
          target="_blank"
          :href="project.github"
          class="material-symbols-outlined button"
          style="margin-left: 100px"
        >
          Github
        </a>
      </div>
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
.body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  font-family: "Mansrope", sans-serif;
}

.card {
  width: 30rem;
  height: 36rem;
  border-radius: 24px;
  border: none;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  color: black;
  box-shadow: 10px 10px 10px grey;

  img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 10;
    transition: opacity 0.2s ease-out;
  }

  h2 {
    position: absolute;
    inset: auto auto 30px 30px;
    margin: 0;
    transition: inset 0.3s 0.3s ease-out;
    font-family: "Manrope", sans-serif;
    font-weight: normal;
    text-transform: uppercase;
    color: black;
  }

  p,
  a {
    position: absolute;
    opacity: 10;
    max-width: 80%;
    transition: opacity 0.3s ease-out;
    font-family: "Manrope", sans-serif;
    color: black;
    font-weight: 900;
    font-size: smaller;
    display: none;
  }

  p {
    inset: auto auto 80px 30px;
  }

  a {
    inset: auto auto 40px 30px;
    color: inherit;
    text-decoration: none;
  }

  &:hover h2 {
    inset: auto auto 220px 30px;
    transition: inset 0.3s ease-out;
  }

  &:hover p,
  &:hover a {
    opacity: 1;
    transition: opacity 0.5s 0.1s ease-in;
    display: block;
  }

  &:hover img {
    transition: opacity 0.3s ease-in;
    opacity: 0.2;
  }
}

.material-symbols-outlined {
  vertical-align: middle;
}
</style>
