<!-- HTML -->
<template>
  <!-- Navigation Bar -->
  <Navigation />
  <!-- End of Navigation Bar -->
  <div id="loaderOverlay">
    <div class="home" id="displayContent">
      <h1>Hello</h1>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "HomeView",
  components: {
    Navigation,
  },
};
</script>