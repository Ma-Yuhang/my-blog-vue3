import loading from '@/assets/images/loading.svg'
import styles from './loading.module.scss'

function getLoadingImg(el) {
  return el.querySelector('img[data-role=loading]')
}
function createLoadingImg(el) {
  const img = document.createElement('img')
  img.dataset.role = 'loading'
  img.src = loading
  img.className = styles.loading
  el.appendChild(img)
}

export default function (el, binding) {
  const img = getLoadingImg(el)
  if (binding.value) {
    if (!img) {
      createLoadingImg(el)
    }
  } else {
    if (img) {
      img.remove()
    }
  }
}