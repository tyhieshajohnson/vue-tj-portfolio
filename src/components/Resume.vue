<!-- HTML -->
<template>
    <!-- Education -->
  <div class="education">
    <p>{{ resume.id }}</p>
    <p>{{ resume.school }}</p>
    <p>{{ resume.year }}</p>
    <p>{{ resume.field }}</p>
    <p>{{ resume.title }}</p>
    <p>{{ resume.company }}</p>
    <p>{{ resume.organization }}</p>
    <p>{{ resume.cause }}</p>
    <p>{{ resume.heading }}</p>
    <p>{{ resume.skill }}</p>
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

</style>
