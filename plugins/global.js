import Vue from 'vue'

Vue.prototype.$getPos = (ref) => {
  const left = ref.getBoundingClientRect().left
  const top = ref.getBoundingClientRect().top
  return [top, left]
}
