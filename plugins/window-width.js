export default ({ store }, inject) => {
  store.dispatch('winWidthChange')
  window.onresize = () => {
    store.dispatch('winWidthChange')
    console.log(store.state.winWidth)
  }
}
