<!-- HTML -->
<template>
  <div class="body">
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
    <p style="
        font-family: 'Manrope', sans-serif;
        justify-content: center;
        display: flex;
        color:  white;
      ">{{ resume.year }}</p>
    <p style="
        font-family: 'Manrope', sans-serif;
        justify-content: center;
        display: flex;
        color: white;
      ">{{ resume.field }}</p>
    <h1 style="
        font-family: 'Manrope', sans-serif;
        justify-content: center;
        display: flex;
        color:  #ffdb58;
      ">{{ resume.title }}</h1>
    <p style="
        font-family: 'Manrope', sans-serif;
        justify-content: center;
        display: flex;
        color:  white;
      ">{{ resume.company }}</p>
    <h2 style="
        font-family: 'Manrope', sans-serif;
        justify-content: center;
        display: flex;
        color:  white;
      ">{{ resume.organization }}</h2>
    <p style="
        font-family: 'Manrope', sans-serif;
        justify-content: center;
        display: flex;
        
        color: white;
      ">{{ resume.cause }}</p>
    <h1 style="
        font-family: 'Manrope', sans-serif;
        justify-content: center;
        display: flex;
        color: white;
      ">{{ resume.heading }}</h1>
    <p style="
        font-family: 'Manrope', sans-serif;
        justify-content: center;
        display: flex;
        color: #ffdb58;
      ">{{ resume.skill }}</p>
      <div class="skills">
        <!-- CSS -->
        <i class="fa-brands fa-css3-alt"></i>
        <!-- HTML -->
        <i class="fa-brands fa-html5"></i>
        <!-- JAVASCRIPT -->
        <i class="fa-brands fa-js"></i>
        <!-- FIGMA -->
        <i class="fa-brands fa-figma"></i>
        <!-- BOOTSTRAP -->
        <i class="fa-brands fa-bootstrap"></i>
        <!-- VUE.JS -->
        <i class="fa-brands fa-vuejs"></i>
        <!--  -->
      </div>
  </div>
</template>

<!-- JavaScript -->
<script>
export default {
  props: ["resume"],
};
</script>

<!-- CSS -->
<style scoped>
.body {
  background-color: #202020;
}
</style>
