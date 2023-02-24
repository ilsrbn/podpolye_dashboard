<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import {NConfigProvider, darkTheme, NMessageProvider} from "naive-ui";
import {watch} from "vue";
import { useMenu } from "@/store/menu";
const route = useRoute()
const menu = useMenu()
watch(() => route.name, () => {
  menu.closeMenu()
})

</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-message-provider>
      <RouterView />
    </n-message-provider>
  </n-config-provider>
</template>
