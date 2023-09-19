import { defineStore } from "pinia";
import { getAbout } from '@/api/about'
export const useAboutStore = defineStore("about", {
  state: () => ({
    isLoading: true,
    src: ''
  }),
  actions: {
    async setAboutSrc() {
      if (this.src) {
        return
      }
      this.isLoading = true
      let res = await getAbout()
      this.src = res.data
      this.isLoading = false
    }
  }
})