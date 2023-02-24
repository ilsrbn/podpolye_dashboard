<template>
  <n-page-header v-if="!isMobile">
    <template #title>
      <n-button text size="large">Podpolye</n-button>
    </template>
    <template #extra>
      <n-button quaternary type="error" @click="logout">Logout</n-button>
    </template>
  </n-page-header>
  <n-page-header v-else>
    <template #title>
      <n-button text size="large">Podpolye</n-button>
    </template>
    <template #extra>
      <n-button quaternary @click="toggleMenu"><n-icon size="24"><Menu /></n-icon></n-button>
    </template>
  </n-page-header>
</template>

<script setup lang="ts">
import {NButton, NIcon, NPageHeader} from "naive-ui";
import {Menu} from '@vicons/carbon'
import {computed} from "vue";
import { useWindowSize } from '@vueuse/core'
import { useMenu } from "@/store/menu";

const { toggleMenu } = useMenu()
const isMobile = computed(() => {
  return useWindowSize().width.value < 980;
})

const logout = () => {
  localStorage.clear()
  window.location.href = '/login'
}

</script>

<style scoped>
header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>