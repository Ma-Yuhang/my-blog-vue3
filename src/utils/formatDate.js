// 时间处理函数

/**
 * 将时间戳转化为年月日
 * @param {*} timestamp 
 * @returns 
 */
export function formatDate(timestamp) {
  const date = new Date(+timestamp)
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDay().toString().padStart(2, '0')
  return `${date.getFullYear()}-${month}-${day}`
}