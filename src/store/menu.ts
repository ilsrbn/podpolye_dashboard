import {defineStore} from "pinia";

export const useMenu = defineStore("menu", {
  state: () => ({
    isOpen: false
  }),
  actions: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
    closeMenu() {
      this.isOpen = false
    }
  },
  getters: {
    getIsOpen(): boolean {
      return this.isOpen
    }
  }
})