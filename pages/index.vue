<template>
  <v-card>
    <v-card-title>
      <v-row>
        <v-col>События</v-col>
        <v-spacer />
        <v-col class="d-flex justify-end align-center">
          <v-text-field
            v-model="filter.search"
            hide-details
            density="compact"
            variant="outlined"
            label="Поиск"
            prepend-inner-icon="mdi-magnify"
            clearable
            class="mr-10"
            :loading="loading"
            @input="async () => await fetchItems()"
          />
          <!-- <v-btn prepend-icon="mdi mdi-filter" color="white" class="mr-4" variant="outline">Фильтр</v-btn> -->
          <create-modal />
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-subtitle />

    <v-card-text>
    
      <base-layout>
        <v-card elevation="10" v-for="event in posts" :key="event.id" :style="{ opacity: event.posted ? 1 : 0.5 }">
          <v-img :src="event.cover?.file_url ?? event.attachments[0]?.file_url ?? imageFallback" cover aspect-ratio="1"  />
          <v-card-title>
            {{ event.title }}
          </v-card-title>

          <v-card-subtitle>
            <v-row>
              <v-spacer />
              <v-col align="end">
                {{ formatDate(event.event_date) }}
              </v-col>
            </v-row>
          </v-card-subtitle>
          <v-card-text>
          <p><span class="truncate">{{ event.description }}</span></p>
          </v-card-text>

          <v-card-actions class="mt-auto">
            <v-row>
              <v-col>
                <v-btn color="error" block append-icon="mdi mdi-delete" variant="tonal" @click="handleDelete(event)">
                  Удалить
                </v-btn>
              </v-col>
              <v-col>
                <v-btn color="primary" block append-icon="mdi mdi-eye" variant="tonal" :to="'/post/' + event.slug">
                  Детальнее
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </base-layout>
    </v-card-text>
    <!-- <create-modal /> -->
  </v-card>
</template>
<script>
import { useCustomFetch } from '~/composables/useCustomFetch'
import createModal from '~/components/post/createModal.vue'
import BaseLayout from '~~/components/baseLayout.vue'
export default {
  components: { createModal, BaseLayout },
  data: () => ({
    baseUrl: 'https://back.podpolye-api.serbin.co/api/admin/post?',
    imageFallback: "https://placehold.co/400",
    posts: [],
    filter: {
      search: null
    },
    loading: false
  }),
  methods: {
    async fetchItems() {
      
        this.loading = true
        const url = this.baseUrl + this.buildQuery()
        this.posts = await useCustomFetch(url)
      
        this.loading = false
      
    },
    buildQuery() {
      const queries = {}
      for(const key in this.filter) {
        if (this.filter[key]) queries[key] = this.filter[key]
      }
      return new URLSearchParams(queries).toString()
    },
    formatDate(dateString) {
      const date = new Date(dateString)
      const day = date.toLocaleDateString('ru-RU', { year: 'numeric', month: 'short', day: 'numeric' })

      return day
    },
    async handleDelete(item) {
      const agree = window.confirm("Вы точно хотите удалить это событие?\nЭто событие нельзя отменить!")
      if (!agree) return
      try {
        await useCustomFetch('https://back.podpolye-api.serbin.co/api/admin/post/' + item.id, { method: "DELETE" })
        this.$router.go()
      } catch(e) {
        console.log({e});
      }
    }
  },
  async created() {
    await this.fetchItems()
  },
}
</script>
<style scoped>
.truncate {
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  min-height: calc(4em * 1.4);
  text-align: justify;
}
</style>