<!-- HTML -->
<template>
        <div class="card mb-3 card-group">
          <div class="row g-0">
            <div class="col-md-4">
              <img :src="project.image" class="card-img-top" alt="..." height="200px" />
              <button style="background-color: #181818; width: 50px; height: 50px; align-items: end; border-radius: 7px; margin-top: 100px;">
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
                      style="
                        text-decoration: none;
                        color: #ffffff;
                        padding-top: 11px;
                        font-size: smaller;
                      "
                      download
                      >LIVE</a
                    >
                  </p>
                </button>
                <button style="background-color: #181818; width: 50px; height: 50px; border-radius: 7px;">
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
                      style="
                        text-decoration: none;
                        color: #ffffff;
                        padding-top: 11px;
                        font-size: smaller;
                      "
                      download
                      >CODE</a
                    >
                  </p>
                </button>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title" style="color: #ffdb58;">{{ project.heading }}</h5>
                <p class="card-text">
                  {{ project.description }}
                </p>
                <p class="card-text">
                  <small class="text-body-secondary" style="color: lightgray;"
                    >{{ project.text }}</small
                  >
                </p>
              </div>
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
.card-group {
  width: 25rem;
  height: 25rem;
  padding: 16px;
}

.card {
  background-color: #3b3b3b;
  margin-top: 60px;
}

.row {
    margin: 0 auto;
}

p {
  font-size: x-small;
  color: #FFFF;
}

</style>
