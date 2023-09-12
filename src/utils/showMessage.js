import styles from './showMessage.module.scss'

/**
 * 弹出消息
 * @param {String} type 消息类型
 * @param {String} message 消息内容
 * @param {Number} duration 消息显示时间
 */
export default function (options = {}) {
  const type = options.type || 'success'
  const message = options.message || '评论成功'
  const duration = options.duration || 2000

  const div = document.createElement('div')
  div.innerHTML = `<span>${message}</span>`
  div.className = `${styles.message} ${styles[`message-${type}`]}`

  document.body.appendChild(div)

  div.clientHeight
  div.style.opacity = 1
  div.style.top = '6%'

  setTimeout(() => {
    div.style.opacity = 0
    div.addEventListener('transitionend', () => {
      div.remove()
      options.callback && options.callback()
    }, { once: true })
  }, duration)

}