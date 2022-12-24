<template>
  <slot name="activator" :open="() => handleOpen()" />
  <Teleport to="body">
    <div class="modal-mask" v-if="isOpened">
      <div class="modal-wrapper">
        <v-card class="modal-container" :style="{maxWidth: maxWidth}">
          <v-toolbar>
            <v-toolbar-title class="modal-header">
              <slot name="header" />
            </v-toolbar-title>
            <template #append>
              <v-btn icon="mdi-close" variant="tonal" @click="handleClose" />
            </template>
          </v-toolbar>

          <v-card-text class="modal-body">
            <slot name="body">
            </slot>
          </v-card-text>

          <v-card-actions class="modal-footer">
            <v-spacer />
            <slot name="footer">
            </slot>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </Teleport>
</template>
<script>


export default {
  data: () => ({
    isOpened: false
  }),
  props: {
    maxWidth: {
      type: [String, Number],
      default: "80%"
    },
  },
  methods: {
    handleClose() {
      this.isOpened = false
    },
    handleOpen() {
      this.isOpened = true
    }
  }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  margin-inline: auto;
  max-height: 90vh;
  overflow-y: scroll;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>