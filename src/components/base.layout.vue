<template>
 <n-layout style="height: 100svh">
   <n-layout-header bordered id="layoutHeader" style="padding: 12px 24px">
     <header-layout />
   </n-layout-header>
   <n-layout position="absolute" :style="`top: ${headerHeight}px; bottom: 0;`" :has-sider="!isMobile">
     <n-layout-sider bordered content-style="padding: 12px;" :native-scrollbar="false" v-if="!isMobile">
       <n-menu :options="menuOptions" :default-value="currentRoute" />
     </n-layout-sider>
     <n-layout content-style="padding: 24px 48px;" :native-scrollbar="false">
       <Suspense>
         <template #fallback>
           Loading...
         </template>
        <RouterView />
       </Suspense>
     </n-layout>
     <n-layout position="absolute" :style="`top: 0; bottom: 0;`" content-style="padding: 24px 48px;" :native-scrollbar="false" v-if="isMobile && isOpen">
       <n-menu :options="mobileMenuOptions" :default-value="currentRoute" ></n-menu>
     </n-layout>
   </n-layout>
 </n-layout>
</template>

<script setup lang="ts">
import {NButton, NH1, NH3, NIcon, NLayout, NLayoutFooter, NLayoutHeader, NLayoutSider, NMenu} from "naive-ui";
import { Document, Logout } from "@vicons/carbon";
import type { MenuOption } from "naive-ui";
import {Component, h, onMounted, ref} from "vue";
import { useRoute } from "vue-router";
import {RouterLink} from "vue-router";
import HeaderLayout from "@/components/header.layout.vue";
import {computed} from "vue";
import { useWindowSize } from '@vueuse/core'
import { useMenu } from "@/store/menu";


const isOpen = computed(() => {
  return useMenu().getIsOpen
})
const headerHeight = ref(64);
onMounted(() => {
  const header = document.getElementById('layoutHeader')
  headerHeight.value = header!.clientHeight + 1;
});


const isMobile = computed(() => {
  return useWindowSize().width.value < 980;
})


const currentRoute = useRoute().name as string

function renderLabel(text: string, path: string) {
  return () => h(RouterLink, { to: { name: path } }, { default: () => text })
}



function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: renderLabel('Posts', 'posts'),
    key: 'posts',
    icon: renderIcon(Document)
  }
]

const mobileMenuOptions: MenuOption[] = [
    ...menuOptions,
  {
    label: renderLabel('Logout', 'login'),
    key: 'login',
    icon: renderIcon(Logout)
  }
]
</script>
