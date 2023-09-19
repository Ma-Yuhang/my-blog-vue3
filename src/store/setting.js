import { defineStore } from "pinia";
import { getSetting } from '@/api/setting'
export const useSettingStore = defineStore("setting", {
  state: () => ({
    isLoading: true,
    settings: []
  }),
  actions: {
    async setSettings() {
      this.isLoading = true
      let res = await getSetting()
      this.settings = res.data
      this.isLoading = false
    }
  }
})