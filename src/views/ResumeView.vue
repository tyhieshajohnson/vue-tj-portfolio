<!-- HTML -->
<template>
  <div class="resume body">
    <h1>Resume</h1>
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            2013 - 2017: Harold Cressy High School
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          class="accordion-collapse collapse show"
        >
          <div class="accordion-body">
            <strong>Matriculated - Bachelors Pass</strong>
            <br>
            I graduated Harold Cressy High in the year <strong>2017</strong>.
            Where I studied English as my home language, Afrikaans, Life Science
            and History as my main subjects.
          </div>
        </div>
      </div>

      <!-- 2 -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo"
          >
            2017: Volunteer Work
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          class="accordion-collapse collapse"
        >
          <div class="accordion-body">
            <strong>Baitul-Ansaar Child & Youth Care Centre - Student Volunteer</strong>
            <br>
            Ipsum Lorem
            <br>
            <strong>Two Oceans Marathon - Aid at Hydration Station</strong>
            <br>
            Ipsum Lorem
          </div>
        </div>
      </div>

      <!--  -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree"
          >
            2018 - 2023: Tertiary Education
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          class="accordion-collapse collapse"
        >
          <div class="accordion-body">
            <strong>Bachelors of Arts - Psychology</strong>
            <br>
            I graduated from the University of The Western Cape in the year
            <strong>2023</strong>. Where I triple majored in Psychology, English
            and Anthropology.
          </div>
        </div>
      </div>

      <!-- 3 -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseFour"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseFour"
          >
            2018 - 2020: Georgen Office
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseFour"
          class="accordion-collapse collapse"
        >
          <div class="accordion-body">
            <strong>Office Assistant - Part-time</strong>
            <br>
            Handled numerous tasks, assisted with packaging and product
            finishing, book keeping and was always flexible to assist with any
            project needing assistance.
          </div>
        </div>
      </div>

      <!-- 4 -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseFive"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseFive"
          >
            2020: American Swiss Jewelers
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseFive"
          class="accordion-collapse collapse"
        >
          <div class="accordion-body">
            <strong>Retail Sales Associate - Part-time</strong>
            <br>
            Assisted Customers, completed sales, handled inventory and acted as
            a brand ambassador. My time at American Swiss taught me to solve
            problems swiftly with basic analytical thinking and keeping the
            customer satisfied.
          </div>
        </div>
      </div>

      <!-- 5 -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseSix"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseSix"
          >
            2022 - 2023: Georgen Creative
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseSix"
          class="accordion-collapse collapse"
        >
          <div class="accordion-body">
            <strong>Social Media Manager - Intern</strong>
            <br>
            Throughout my internship in social media management, I acquired
            valuable skills in SEO strategies to enhance content visibility
            and reach. Furthermore, I strengthened my teamwork abilities through
            collaborative projects and cultivated effective communication skills
            by working with a diverse range of individuals from various
            backgrounds and cultures.
          </div>
        </div>
      </div>

      <!-- 7 -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseSeven"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseSeven"
          >
            2023 - Present: National Centre for Child Protection
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseSeven"
          class="accordion-collapse collapse"
        >
          <div class="accordion-body">
            <strong>Student Counsellor</strong>
            <br>
            Ipsum Lorem
          </div>
        </div>
      </div>

      <!-- 8 -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseEight"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseEight"
          >
            2023 - 2024: Life Choices Academy
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseEight"
          class="accordion-collapse collapse"
        >
          <div class="accordion-body">
            <strong>Full Stack Developer - Certificate</strong>
            <br>
            Ipsum Lorem
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<!-- JavaScript -->
<script>
import Resume from "@/components/Resume.vue";
import Skills from "@/components/Skills.vue";

export default {
  name: "ResumeView",
  components: {
    Resume,
    Skills,
  },
  computed: {
    resume() {
      return this.$store.state.resume;
      return this.$store.state.skills;
    },
  },

  mounted() {
    this.$store.dispatch("getResume");
    this.$store.dispatch("getSkills");
  },
};
</script>

<!-- CSS -->
<style scoped>
.body {
  background-color: #202020;
}

.accordion {
  width: 1000px;
  margin: 0 auto;
  margin-bottom: 0 auto;
  background-color: #202020;
}

.accordion-button {
  background-color: #202020;
  color:#ffdb58;
  font-weight: 900;
  font-family: 'Manrope', sans-serif;
}

.accordion-item {
  background-color: #202020;
  color: white;
  font-family: 'Manrope', sans-serif;
}

h1 {
  margin-bottom: 0;
  text-align: center;
  background-color: #202020;
  color: white;
}
</style>
