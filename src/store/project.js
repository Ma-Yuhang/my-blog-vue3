import { defineStore } from "pinia";
import { getProjects } from '@/api/project'
export const useProjectStore = defineStore("project", {
  state: () => ({
    isLoading: true,
    projectList: []
  }),
  actions: {
    async setProjectList() {
      if (this.projectList.length) {
        return
      }
      this.isLoading = true
      let res = await getProjects()
      this.projectList = res.data
      this.isLoading = false
    }
  }
})