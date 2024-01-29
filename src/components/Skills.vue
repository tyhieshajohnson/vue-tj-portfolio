<template>
  <div class="skills">
    <p style="
        font-family: 'Manrope', sans-serif;
        justify-content: center;
        display: flex;
        color:  white;
      ">{{ resume.skill }}</p>
  </div>
</template>

<!-- JavaScript -->
<script>
export default {
  props: ["skills"],
};
</script>
