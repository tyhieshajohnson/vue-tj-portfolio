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
