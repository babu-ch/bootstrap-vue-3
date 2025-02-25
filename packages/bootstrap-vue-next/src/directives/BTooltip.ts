import {type Directive, ref} from 'vue'
import {
  bind,
  ElementWithPopper,
  resolveContent,
  resolveDirectiveProps,
  unbind,
} from '../utils/floatingUi'

export default {
  mounted(el, binding) {
    const text = resolveContent(binding.value)

    el.$__state = ref({
      ...resolveDirectiveProps(binding, el),
      title: text.title ?? text.content ?? '',
      tooltip: true,
    })
    bind(el, binding)
  },
  updated(el, binding) {
    const text = resolveContent(binding.value)
    if (!el.$__state) return
    el.$__state.value = {
      ...resolveDirectiveProps(binding, el),
      title: text.title ?? text.content ?? '',
      tooltip: true,
    }
  },
  beforeUnmount(el) {
    unbind(el)
  },
} as Directive<ElementWithPopper>
