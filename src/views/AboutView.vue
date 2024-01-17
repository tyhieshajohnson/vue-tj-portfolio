<template>
  <div>
    <!-- Body -->
    <div class="body vh-100 w-100">
      <div class="about-information" id="about-information">
        <!-- About Images -->
        <!-- Social Media Mock-up -->
        <div
          class="container text-center"
          style="border-radius: 10px; padding: 10px"
        >
          <!-- About Information -->
          <!-- Content -->
          <div class="about-intro row" style="padding-left: 100px">
            <div class="profile col">
              <!-- carousel -->
              <div
                id="carouselExampleDark"
                class="carousel carousel-dark slide"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
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
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="10000">
                    <img
                      src="https://i.ibb.co/bv2PM5L/327965335-5888160654578546-5982643696383564344-n.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img
                      src="https://i.ibb.co/qCs5zDw/IMG-2294.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://i.ibb.co/j345W4s/krugernationalpark-nature-hyena-giraffe-quadbiking-paintballing-archery-godswindowmpumalaga-skyview.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://i.ibb.co/47559Zt/IMG-4179.jpg"
                      class="d-block w-100"
                      alt="..."
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
            <div class="aboutInfo col" style="padding-left: 100px">
              <h1
                style="
                  font-family: 'Manrope', sans-serif;
                  display: flex;
                  justify-content: center;
                  padding-top: 50px;
                "
              >
                Who Am I?
              </h1>
              <p style="font-family: 'Manrope', sans-serif">
                Hello there! I'm Tyhiesha Johnson, I am passionate about
                learning and the technology industry. Welcome to my digital
                world.<br />
              </p>
              <!-- Information -->
              <div
                style="
                  font-family: 'Manrope', sans-serif;
                  display: flex;
                  justify-content: center;
                "
              >
                <p>
                  I am an aspiring Front-End Developer, living in Cape Town,
                  South Africa. My journey started in Marketing, as a part-time
                  Social Media Manager focusing mainly on Analytics and Content
                  Creation. As time went on my passion for design grew and my
                  need to enter the Developer space heightened. I am recent B.A
                  Psychology graduate, and this is what sets me apart as I
                  combine my love for Marketing and Psychology to create
                  websites that are more user-friendly, engaging, and effective
                  in achieving clients goals. People, Research and Beauty are my
                  passions which aid in the storytelling of websites. My
                  creative process includes, planning each part of the journey
                  towards a fully developed website, finding inspiration from my
                  team, And by exploring the great outdoors with hikes, skating
                  and visiting Art Galleries with friends. My main goal is to
                  feed my eagerness to gain profienciency in essential coding
                  languages for effective and dynamic web designs And to become
                  the best at what I do.
                </p>
              </div>
              <!-- Resume Button -->
              <div
                id="resume-button"
                style="padding-left: 100px; padding-top: 20px"
              >
                <button>
                  <i class="fa-solid fa-file-arrow-down"></i>
                  <p
                    class="resume-button"
                    style="
                      font-family: 'Manrope', sans-serif;
                      display: flex;
                      justify-content: center;
                    "
                  >
                    <a
                      href="https://www.hostize.com/v/A6xPpdqQO7/resume---tyhiesha-ty-johnson-pdf"
                      download
                      >DOWNLOAD RESUME</a
                    >
                  </p>
                </button>
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
.body {
  background-color: #202020;
  /* position: absolute; */
  z-index: 100;
}

.nav-links {
  display: flex;
  flex-flow: row nowrap;
  margin-right: 30px;
}

/* About Information Div */
#about-information {
  width: 1307px;
  height: 750px;
  border-radius: 24px;
  background-color: #3b3b3b;
  /* margin-top: 100px; */
  margin-left: 100px;
}

.about-intro {
  display: flex;
  justify-content: center;
}

/* Resume Button */
button {
  background-color: #181818;
  margin-left: 50px;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: baseline;
}

#resume-button {
  height: 64px;
  width: 400px;
  padding-top: 20px;
  padding-left: 1000px;
}

.resume-button p {
  font-size: 10px;
  color: #ffffff;
}

@media screen and (max-width: 750px) {
  /* Body */
  .body {
    z-index: 0;
  }

  /* Navigation Links */
  .nav-links {
    margin-right: 10px;
  }

  /* About Information Div */
  #about-information {
    width: calc(100% - 40px);
    height: auto;
    border-radius: 0;
    background-color: #3b3b3b;
    margin-top: 20px;
    margin-left: 20px;
    padding: 20px;
  }

  /* Resume Button */
  button {
    margin-left: 10px;
  }

  #resume-button {
    width: 100%;
    padding-top: 15px;
    padding-left: 10px;
  }

  .text-center {
    border: solid lightgray 3px;
    border-radius: 10px;
    padding: 10px;
    width: 1000px;
  }
}
</style>
