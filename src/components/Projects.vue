<!-- HTML -->
<template>
  <div>
    <div class="row">
      <div class="col-4">
        <div class="card-group" style="display: flex">
          <div class="card">
            <img :src="project.image" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ project.heading }}</h5>
              <p class="card-text">{{ project.text }}</p>
            </div>
          </div>
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

.row {
    margin: 0 auto;
}
</style>
