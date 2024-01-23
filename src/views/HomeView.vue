<!-- HTML -->
<template>
  <!-- Body -->
  <div class="vh-100 h-100 body">
    <div id="home-container">
      <!-- Home Heading -->
      <div class="home-information" id="home-information">
        <svg width="100" height="100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="grey"
            stroke-width="4"
            fill="grey"
          />
        </svg>
        <h1 style="font-family: 'Manrope', sans-serif" class="home-description">
          Hi, I am <span style="color: #ffdb58">Tyhiesha Johnson</span> <br />A
          Front-End Developer <br />based in Cape Town.
        </h1>
        <!-- Home Description -->
        <p style="font-family: 'Manrope', sans-serif" class="home-description">
          Hey there! I'm Ty, a passionate and curious front-end developer <br />
          on the journey of turning ideas into captivating web experiences. With
          a <br />
          foundation in
          <span style="color: #ffdb58">HTML, CSS, and JavaScript</span>, I'm
          excited about the dynamic
          <br />
          world of web development and the endless possibilities it offers. My
          <br />
          enthusiasm for crafting user-friendly interfaces drives me to stay
          up-to-date <br />
          with the latest technologies and best practices.
        </p>
        <svg width="100" height="100" style="margin-left: 600px">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="grey"
            stroke-width="4"
            fill="grey"
          />
        </svg>
      </div>
      <!-- Home Image -->
      <div id="home-image">
        <img
          src="https://i.ibb.co/2c2zBSc/1690957765595-bw.jpg"
          alt=""
          class="home-image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "home",
  components: {
    Navigation,
  },
};
</script>

<!-- CSS -->
<style scoped>
/* Body */
.body {
  background-color: #202020;
}

/* Home Content */
/* Alignment */
#home-container {
  overflow: hidden;
}

#home-information {
  float: inline-start;
  margin-top: 100px;
  margin-left: 100px;
}

#home-image {
  float: inline-end;
  margin-top: 100px;
  margin-right: 135px;
  margin-bottom: 55px;
}

@keyframes fadeInOut {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

svg {
  animation: fadeInOut 4.4s infinite;
}

/* Image Size and Border */
.home-image {
  border-radius: 50%;
  width: 400px;
  height: 400px;
  /* margin-right: 50px; */
  margin-top: 50px;
  box-shadow: 0 0 10px rgba(255, 254, 254, 0.5);
  animation: glow 2s infinite alternate;
}

@keyframes glow {
  0% {
    box-shadow: 0 0 10px #ffdb58;
  }
  100% {
    box-shadow: 0 0 20px #47525c, 0 0 30px #9a9a9a, 0 0 40px #ffdb58;
  }
}

.home-description {
  font-style: normal;
  font-weight: 100;
  margin-left: 50px;
  margin-top: 50px;
}

button {
  background-color: #9d9d9d;
  margin-left: 50px;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: baseline;
}

#home-button {
  height: 64px;
  width: 400px;
  margin-left: 100px;
  margin-bottom: 50px;
}

.home-button p {
  font-size: 10px;
  color: #ffffff;
}

h1,
p {
  color: #dedede;
}

.home-description,
img {
  font-family: "Manrope", sans-serif;
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media screen and (max-width: 390px) {
  .body {
    background-color: #202020;
    width: max-content;
  }
  /* Home Content */
  /* Alignment */
  #home-container {
    overflow: hidden;
  }

  #home-information {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 5px;
  }

  .home-description {
    font-style: normal;
    font-weight: 100;
    margin-left: 10px;
    margin-right: 10px;
  }
  /* Image Size and Border */
  .home-image {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    justify-content: start;
    box-shadow: 0 0 10px rgba(255, 254, 254, 0.5);
    margin-right: 50%;
  }
}
</style>
