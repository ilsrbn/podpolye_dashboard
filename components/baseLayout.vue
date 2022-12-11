<template>
  <div class="dashboardGrid">
    <slot />
  </div>
</template>

<script>
export default {
  setup() {}
}
</script>

<style scoped>
.dashboardGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  align-items: flex-start;
}
@media screen and (max-width: 1239px) {
  .dashboardGrid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 700px) {
  .dashboardGrid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 500px) {
  .dashboardGrid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>