<!-- HTML -->
<template>
  <div class="body">
    <!-- Education -->
    <h2
      @click="toggleContent"
      style="justify-content: center; display: flex; color: white"
    >
      {{ resume.schoolHeading }}
      <div v-if="isContentVisible">
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
    <!-- End of Educationn -->

    <!-- Work experience -->
    <div>
      <h2
        @click="toggleContent"
        style="justify-content: center; display: flex; color: white"
      >
        {{ resume.workYear }}
        <div v-if="isContentVisible">
          <h1
            style="
              font-family: 'Manrope', sans-serif;
              justify-content: center;
              display: flex;
              color: #ffdb58;
            "
          >
            {{ resume.workTitle }}
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
      <h2 @click="toggleContent" style="justify-content: center; display: flex; color: white">
        {{ resume.volunteerYear }}
        <div v-if="isContentVisible">
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
            {{ resume.volunteerOrganization }}
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
      isContentVisible: false,
    };
  },
  methods: {
    toggleContent() {
      this.isContentVisible = !this.isContentVisible;
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
