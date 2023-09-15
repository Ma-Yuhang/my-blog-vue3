import { ref, onMounted } from 'vue'

/**
 * 从远程获取数据的hooks
 * @param {Function} getData 获取数据的函数
 * @param {*} defaultData data的默认值
 * @returns 
 */
export default function useGetData(getData, defaultData = null) {
  let isLoading = ref(true)

  let data = ref(defaultData)

  onMounted(async () => {
    const res = await getData()
    data.value = res.data
    isLoading.value = false
  })

  return {
    isLoading,
    data
  }
}