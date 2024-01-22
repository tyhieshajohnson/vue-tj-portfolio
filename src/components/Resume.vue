<!-- HTML -->
<template>
  
    <h1
      id="school"
      style="
        font-family: 'Manrope', sans-serif;
        justify-content: center;
        display: flex;
        color: black;
      "
    >
      {{ resume.school }}
    </h1>
    <p style="
        font-family: 'Manrope', sans-serif;
        justify-content: center;
        display: flex;
        color: black;
      ">{{ resume.year }}</p>
    <p style="
        font-family: 'Manrope', sans-serif;
        justify-content: center;
        display: flex;
        color: black;
      ">{{ resume.field }}</p>
    <h1 style="
        font-family: 'Manrope', sans-serif;
        justify-content: center;
        display: flex;
        color: black;
      ">{{ resume.title }}</h1>
    <p style="
        font-family: 'Manrope', sans-serif;
        justify-content: center;
        display: flex;
        color: black;
      ">{{ resume.company }}</p>
    <h2 style="
        font-family: 'Manrope', sans-serif;
        justify-content: center;
        display: flex;
        color: black;
      ">{{ resume.organization }}</h2>
    <p style="
        font-family: 'Manrope', sans-serif;
        justify-content: center;
        display: flex;
        color:black;
      ">{{ resume.cause }}</p>
    <h1 style="
        font-family: 'Manrope', sans-serif;
        justify-content: center;
        display: flex;
        color:black;
      ">{{ resume.heading }}</h1>
    <p style="
        font-family: 'Manrope', sans-serif;
        justify-content: center;
        display: flex;
        color:black;
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
