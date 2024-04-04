<!-- HTML -->
<template>
  <!-- Bootstrap Navigation Bar -->
  <!-- Main Navigation Container -->
  <div class="nav-container" style="background-color: #323232">
    <nav class="navbar">
      <div class="container-fluid">
        <router-link to="/" class="nav-link">
          <!-- Google Drive Embedded Link -->
          <img src="" /><img
            src="https://i.ibb.co/1qXqxNJ/Screenshot-2024-01-09-123339.png"
            alt="Logo"
            width="30"
            height="20"
            class="d-inline-block align-text-top"
            id="logo"
          />
          <a style="font-family: 'Manrope', sans-serif">Tyhiesha</a>
        </router-link>

        <!-- Navigation Links: Home, About, Personal Projects, Resume, Testimonials and Contact -->
        <div class="nav-links" style="">
          <router-link
            to="/"
            class="nav-link"
            style="font-family: 'Manrope', sans-serif"
            >Home
          </router-link>
          <router-link
            to="/about"
            class="nav-link"
            style="font-family: 'Manrope', sans-serif"
            >About</router-link
          >
          <router-link
            to="/projects"
            class="nav-link"
            style="font-family: 'Manrope', sans-serif"
            >Projects</router-link
          >
          <router-link
            to="/resume"
            class="nav-link"
            style="font-family: 'Manrope', sans-serif"
            >Experience</router-link
          >
          <router-link
            to="/testimonial"
            class="nav-link"
            style="font-family: 'Manrope', sans-serif"
            >References</router-link
          >
          <router-link
            to="/contact"
            class="nav-link"
            style="font-family: 'Manrope', sans-serif"
            >Contact</router-link
          >
        </div>
        <!-- Burger Menu -->
        <div class="burger-menu" @click="toggleMenu">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      const navLinks = document.querySelector(".nav-links");
      navLinks.classList.toggle("active");
    },
  },
};
</script>

<!-- CSS -->
<style scoped>
/* Navigation Bar */
#logo {
  margin-left: 30px;
}

.container-fluid {
  margin-top: 20px;
}
.nav-link {
  color: #dedede;
  font-size: 15px;
  font-weight: 500;
  justify-content: space-between;
}
.nav-container {
  height: 80px;
}
.nav-links {
  display: flex;
  width: 500px;
  justify-content: space-between;
}

.burger-menu {
  display: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

.burger-menu .bar {
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin: 5px 0;
}

@media screen and (max-width: 600px) {
  #logo {
    margin-left: 5px;
  }

  .container-fluid {
    margin-top: 10px;
  }

  .nav-link {
    color: #dedede;
    font-size: 20px;
    font-weight: 500;
    justify-content: space-between;
  }

  .nav-links {
    justify-content: space-between;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #323232;
  }

  .nav-links.active {
    display: block;
  }

  .burger-menu {
    display: block;
  }
}
</style>
