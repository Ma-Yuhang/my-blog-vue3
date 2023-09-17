// 时间处理函数

/**
 * 将时间戳转化为年月日
 * @param {*} timestamp 
 * @returns 
 */
export function formatDate(timestamp) {
  const date = new Date(+timestamp)
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  return `${date.getFullYear()}-${month}-${day}`
}

/**
 * 将时间戳转化为年月日时分秒
 * @param {*} timestamp 
 * @returns 
 */
export function formatDate2(timestamp) {
  const date = new Date(+timestamp)
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const hours = date.getHours().toString().padStart(2, '0')
  const minute = date.getMinutes().toString().padStart(2, '0')
  const second = date.getSeconds().toString().padStart(2, '0')
  return `${date.getFullYear()}-${month}-${day} ${hours}:${minute}:${second}`
}