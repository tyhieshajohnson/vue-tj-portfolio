<template>
  <div>
    <!-- Body -->
    <div class="body" vh-100 w-100>
      <div class="about-information" id="about-information">
        <!-- About Images -->
        <div class="container text-center">
          <!-- About Information -->
          <!-- Content -->
          <div class="about-intro row">
            <div class="profile col">
              <!-- carousel -->
              <div
                id="carouselExampleDark"
                class="carousel carousel- slide"
                style="margin-top: 60px"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleLight"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <!-- <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button> -->
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="10000">
                    <img
                      src="https://i.ibb.co/bv2PM5L/327965335-5888160654578546-5982643696383564344-n.jpg"
                      class="d-block w-100"
                      alt="..."
                      height="600px"
                      style="border-radius: 7px"
                    />
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img
                      src="https://i.ibb.co/qCs5zDw/IMG-2294.jpg"
                      class="d-block w-100"
                      alt="..."
                      height="600px"
                      style="border-radius: 7px"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://i.ibb.co/j345W4s/krugernationalpark-nature-hyena-giraffe-quadbiking-paintballing-archery-godswindowmpumalaga-skyview.jpg"
                      class="d-block w-100"
                      alt="..."
                      height="600px"
                      style="border-radius: 7px"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="aboutInfo col">
              <h1
                style="
                  font-family: 'Manrope', sans-serif;
                  display: flex;
                  justify-content: center;
                  padding-top: 50px;
                  color: white;
                "
                class="title-who"
              >
                Who Am I?
              </h1>
              <p style="font-family: 'Manrope', sans-serif; color: white">
                Hello there! I'm
                <span class="text-heading" style="color: #ffdb58"
                  >Tyhiesha Johnson</span
                >, I am a 24 year old individual who is passionate about
                learning and the technology industry.Welcome to my digital
                world.<br />
              </p>
              <!-- Information -->
              <div
                class="info-container"
                style="font-family: 'Manrope', sans-serif; color: white"
              >
                <p
                  style="
                    font-family: 'Manrope', sans-serif;
                    text-align: center;
                    color: white;
                  "
                >
                  I am an aspiring
                  <span class="text-bounce text-zoom" style="color: #ffdb58"
                    >Front-End Developer</span
                  >, living in
                  <span class="text-bounce text-zoom" style="color: #ffdb58"
                    >Cape Town, South Africa</span
                  >. My journey started in
                  <span class="text-bounce text-zoom" style="color: #ffdb58"
                    >Marketing,</span
                  >
                  as a part-time Social Media Manager focusing mainly on
                  Analytics and Content Creation. As time went on my passion for
                  design grew and my need to enter the Developer space
                  heightened. <br />
                  I am recent
                  <span class="text-bounce text-zoom" style="color: #ffdb58"
                    >B.A Psychology graduate</span
                  >, and this is what sets me apart as I combine my love for
                  Marketing and Psychology to
                  <span class="text-bounce text-zoom" style="color: #ffdb58"
                    >create websites that are more user-friendly, engaging, and
                    effective</span
                  >
                  in achieving clients goals. People, Research and Beauty are my
                  passions which aid in the storytelling of websites. <br />My
                  <span class="text-bounce text-zoom" style="color: #ffdb58"
                    >creative process</span
                  >
                  includes, planning each part of the journey towards a fully
                  developed website, finding inspiration from my team, And by
                  exploring the great outdoors with hikes, skating and visiting
                  Art Galleries with friends. My
                  <span class="text-bounce text-zoom" style="color: #ffdb58"
                    >main goal</span
                  >
                  is to feed my eagerness to gain profienciency in essential
                  coding languages for effective and dynamic web designs.
                  <br />
                  <span class="text-bounce text-zoom" style="color: #ffdb58"
                    >And to become the best at what I do.</span
                  >
                </p>
                <!-- <p>Languages: English & Afrikaans</p> -->
              </div>
              <!-- Resume Button -->
              <div
                id="resume-button"
                style="display: flex; width: 100%; place-content: center"
              >
                <a
                  href="https://green-dita-4.tiiny.site/"
                  download="TyhieshaJohnson.pdf"
                  target="_blank"
                  style="
                    text-decoration: none;
                    color: #ffffff;
                    font-family: 'Manrope', sans-serif;
                  "
                >
                  <button
                    style="
                      background-color: #ffdb58;
                      border: none;
                      padding: 10px;
                      font-size: smaller;
                    "
                  >
                    CV
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- JavaScript -->
<script></script>

<!-- CSS -->
<style scoped>
/* Body */
.carousel-inner {
  box-shadow: 0 0 25px rgba(255, 254, 254, 0.5);
  border-radius: 7px;
}

.text-center {
  border-radius: 10px;
  padding: 10px;
}

.body {
  background-color: #202020;
  z-index: 100;
  padding: 25px;
}

/* About Information Div */
.about-information div {
  margin: 0 auto;
}

#about-information {
  width: 1100px;
  height: 750px;
  margin: 0 auto;
  border-radius: 24px;
  background-color: #3b3b3b;
}

.container.text-center {
  display: flex;
  place-content: center;
}

.about-intro {
  display: flex;
  justify-content: center;
  padding-left: 100px;
}

.info-container {
  display: flex;
  justify-content: center;
}

/* Resume Button */
button {
  margin-left: 50px;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: baseline;
  margin-left: 11px;
}

#resume-button {
  height: 50px;
  width: 500px;
  padding-top: 5px;
}

.resume-button p {
  font-size: 10px;
  color: white;
  display: flex;
  justify-content: center;
}

.resume-button {
  background-color: #ffdb58;
}

@keyframes zoomIn {
  0%,
  100% {
    transform: scale(1);
    font-size: 16px;
  }
  50% {
    transform: scale(2);
    font-size: 18px;
  }
}

.text-zoom:hover {
  animation: zoomIn 5s;
}

.title-who,
.text-bounce {
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

@media screen and (max-width: 600px) {
  /* Body */
  .body {
    padding: 20px; /* Adjust padding as needed */
  }

  /* About Information Div */
  #about-information {
    width: auto;
    height: auto;
    padding: 20px; /* Adjust padding as needed */
    border-radius: 10px;
    background-color: #3b3b3b;
    display: flex;
    flex-direction: column;
  }

  .about-intro {
    /* padding: 0 auto; Adjust padding as needed */
    /* text-align: center; */
    display: flex;
    flex-direction: column;
    place-content: center;
    padding-left: 5px;
    /* width: 450px;
    margin: 0 auto; */
  }
  .aboutInfo {
    padding-left: 0;
  }

  .title-who {
    padding-top: 20px;
  }

  .info-container {
    display: flex;
    flex-direction: column;
    align-content: center;
  }

  /* Resume Button */
  #resume-button {
    height: 20px;
    width: 20px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
  }

  /* Adjust button margin */
  button {
    display: flex;
    justify-content: center;
  }

  .resume-button p {
    font-size: 10px;
    color: #181818;
  }

  .carousel-inner {
    width: 450px;
  }
  .carousel-item {
    width: 450px;
  }
}
</style>
