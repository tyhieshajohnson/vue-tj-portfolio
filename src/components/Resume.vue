<template>
  <div class="body">
    <!-- Education -->
    <h2
      @click="toggleEducationContent"
      style="justify-content: center; display: flex; color: white"
    >
      {{ isEducationContentVisible ? '' : resume.schoolHeading }}
      <div v-if="isEducationContentVisible">
        <h1
          id="school"
          style="
            font-family: 'Manrope', sans-serif;
            justify-content: center;
            display: flex;
            color: #ffdb58;
          "
        >
          {{ resume.school }}
        </h1>
        <p
          style="
            font-family: 'Manrope', sans-serif;
            justify-content: center;
            display: flex;
            color: white;
          "
        >
          {{ resume.schoolYear }}
        </p>
        <p
          style="
            font-family: 'Manrope', sans-serif;
            justify-content: center;
            display: flex;
            color: white;
          "
        >
          {{ resume.schoolField }}
        </p>
      </div>
    </h2>
    <!-- End of Education -->

    <!-- Work experience -->
    <div>
      <h2
        @click="toggleWorkContent"
        style="justify-content: center; display: flex; color: white"
      >
        {{ isWorkContentVisible ? '' : resume.workTitle }}
        <div v-if="isWorkContentVisible">
          <h1
            style="
              font-family: 'Manrope', sans-serif;
              justify-content: center;
              display: flex;
              color: #ffdb58;
            "
          >
            {{ resume.workYear }}
          </h1>
          <p
            style="
              font-family: 'Manrope', sans-serif;
              justify-content: center;
              display: flex;
              color: white;
            "
          >
            {{ resume.workCompany }}
          </p>
        </div>
      </h2>
    </div>
    <!-- End of experience  -->

    <!-- Volunteer Work -->
    <div>
      <h2 @click="toggleVolunteerContent" style="justify-content: center; display: flex; color: white">
        {{ isVolunteerContentVisible ? '' : resume.volunteerOrganization }}
        <div v-if="isVolunteerContentVisible">
          <h1
            style="
              font-family: 'Manrope', sans-serif;
              justify-content: center;
              display: flex;
              color: #ffdb58;
            "
          >
            {{ resume.volunteerTitle }}
          </h1>
          <p
            style="
              font-family: 'Manrope', sans-serif;
              justify-content: center;
              display: flex;
              color: white;
            "
          >
            {{ resume.volunteerYear }}
          </p>
        </div>
      </h2>
    </div>
    <!-- Volunteer Work End -->

    <!-- Skills -->
    <!-- End of Skills -->

    <h2
      style="
        font-family: 'Manrope', sans-serif;
        justify-content: center;
        display: flex;
        color: white;
      "
    >
      {{ resume.organization }}
    </h2>
    <p
      style="
        font-family: 'Manrope', sans-serif;
        justify-content: center;
        display: flex;
        color: white;
      "
    >
      {{ resume.cause }}
    </p>
    <h1
      style="
        font-family: 'Manrope', sans-serif;
        justify-content: center;
        display: flex;
        color: white;
      "
    >
      {{ resume.heading }}
    </h1>
    <p
      style="
        font-family: 'Manrope', sans-serif;
        justify-content: center;
        display: flex;
        color: #ffdb58;
      "
    >
      {{ resume.skill }}
    </p>
  </div>
</template>

<!-- JavaScript -->
<script>
export default {
  props: ["resume"],
  data() {
    return {
      isEducationContentVisible: false,
      isWorkContentVisible: false,
      isVolunteerContentVisible: false,
    };
  },
  methods: {
    toggleEducationContent() {
      this.isEducationContentVisible = !this.isEducationContentVisible;
    },
    toggleWorkContent() {
      this.isWorkContentVisible = !this.isWorkContentVisible;
    },
    toggleVolunteerContent() {
      this.isVolunteerContentVisible = !this.isVolunteerContentVisible;
    },
  },
};
</script>

<!-- CSS -->
<style scoped>
/* .body {
  background-color: #202020;
} */

/* use a onclick and and bind it to the index of the  */

.body div {
  /* width: 50px; */
  background-color: #202020;
}
</style>

