<template>
  <div class="page">
    <slot />
  </div>
</template>
<style scoped>
.page {
  min-height: 100vh;
  padding: 0;
  margin: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>