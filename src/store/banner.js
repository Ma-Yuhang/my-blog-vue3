import { defineStore } from "pinia";
import { getBannerList } from '@/api/banner'
export const useBannerStore = defineStore("banner", {
  state: () => ({
    isLoading: true,
    banners: []
  }),
  actions: {
    async setBanners() {
      if (this.banners.length) {
        return
      }
      this.isLoading = true
      let res = await getBannerList()
      this.banners = res.data
      this.isLoading = false
    }
  }
})