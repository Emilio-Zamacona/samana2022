export { default as BodyMain } from '../..\\components\\BodyMain.vue'
export { default as CardInfo } from '../..\\components\\CardInfo.vue'
export { default as ContactMain } from '../..\\components\\ContactMain.vue'
export { default as FooterMain } from '../..\\components\\FooterMain.vue'
export { default as FrequentlyAsked } from '../..\\components\\FrequentlyAsked.vue'
export { default as HeroMain } from '../..\\components\\HeroMain.vue'
export { default as InfoBody } from '../..\\components\\InfoBody.vue'
export { default as LowerBody } from '../..\\components\\LowerBody.vue'
export { default as NavBar } from '../..\\components\\NavBar.vue'
export { default as QuestionFaq } from '../..\\components\\QuestionFaq.vue'
export { default as ShopMain } from '../..\\components\\shop\\Main.vue'
export { default as ShopPaymentForm } from '../..\\components\\shop\\PaymentForm.vue'
export { default as ShopProductCard } from '../..\\components\\shop\\ProductCard.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
