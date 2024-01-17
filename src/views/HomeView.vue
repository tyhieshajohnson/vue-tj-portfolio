<!-- HTML -->
<template>
  <!-- Body -->
  <div class="vh-100 h-100 body">
    <div id="home-container">
      <!-- Home Heading -->
      <div class="home-information" id="home-information">
        <h1 style="font-family: 'Manrope', sans-serif" class="home-description">
          Hi, I am Tyhiesha Johnson <br />A Front-End Developer <br />based in
          Cape Town.
        </h1>
        <!-- Home Description -->
        <p style="font-family: 'Manrope', sans-serif" class="home-description">
          Hey there! I'm Ty, a passionate and curious front-end developer <br />
          on the journey of turning ideas into captivating web experiences. With
          a <br />
          foundation in HTML, CSS, and JavaScript, I'm excited about the dynamic
          <br />
          world of web development and the endless possibilities it offers. My
          <br />
          enthusiasm for crafting user-friendly interfaces drives me to stay
          up-to-date <br />
          with the latest technologies and best practices.
        </p>
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
    <!-- Home Button -->
    <div id="home-button">
      <button type="button">
        <i class="fa-regular fa-envelope" style="color: white; font-size:medium;"></i>
        <p class="home-button">
          <a
            href="https://mail.google.com/mail/u/0/"
            style="text-decoration: none; color: white; font-size: 15px;"
          >
            johnsontyhiesha@gmail.com
          </a>
        </p>
      </button>
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
  margin-right: 100px;
  margin-bottom: 50px;
}
/* Image Size and Border */
.home-image {
  border-radius: 50%;
  width: 400px;
  height: 400px;
  margin-right: 50px;
  margin-top: 50px;
  box-shadow: 0 0 10px rgba(255, 254, 254, 0.5);
  animation: glow 2s infinite alternate;
}

@keyframes glow {
            0% {
                box-shadow: 0 0 10px #FFDB58;
            }
            100% {
                box-shadow: 0 0 20px #FFDB58, 0 0 30px #FFDB58, 0 0 40px #FFDB58;
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

h1, p {
  color: #DEDEDE;
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