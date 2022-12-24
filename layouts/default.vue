<template>
<use-auth>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      class="elevation-4"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list :lines="false" nav>
        
          <template v-for="(item, i) in nav" :key="i">
            <v-list-item
              v-if="item.to"
              color="primary"
              :to="item.to"
              router
              exact
            >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>
            <v-list-item-title v-text="item.title"></v-list-item-title>
              
            </v-list-item>
            <v-list-group v-else no-action :prepend-icon="item.icon">
              <template #activator>
              
                  <v-list-item-title v-text="item.title" />
              
              </template>
              <v-list-item
                v-for="(child, index) in item.children"
                :key="index"
                class="pl-12"
                color="primary"
                :to="localePath(child.to)"
                router
                exact
              >
                <v-list-item-action>
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-item-action>
                
                  <v-list-item-title v-text="child.title" />
                
              </v-list-item>
            </v-list-group>
          </template>
        
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-app-bar-title>Подполье | {{ username }}</v-app-bar-title>
      <v-spacer />
      <v-btn @click="logout">Выйти</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
          <slot />
      </v-container>
    </v-main>
  </v-app>
</use-auth>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      
      nav: [
        {
          icon: "mdi-calendar-text",
          title: "События",
          to: "/",
        },
      ]
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: "admin",
      },
    }
  },
  methods: {
    logout() {
      useCookie('pauth').value = null
      window.location.href = 'https://podpolye.org'
    }
  },
  computed: {
    username() {
      const user = useState('user')
      console.log(user)

      return user.value?.username || ""
    }
  }
}
</script>
