<template>
  <li class="nav-item dropdown">
    <b-dropdown v-model="dropdownValue" v-bind="usableProps" is-nav>
      <template #button-content>
        <slot name="button-content" />
      </template>
      <template #toggle-text>
        <slot name="toggle-text" />
      </template>
      <template #default>
        <slot />
      </template>
    </b-dropdown>
  </li>
</template>

<script setup lang="ts">
// import type {BNavItemDropdownProps} from '../types/components'
import type {Middleware, Strategy} from '@floating-ui/vue'
import {useVModel} from '@vueuse/core'
import {computed} from 'vue'
import {useBooleanish} from '../../composables'
import type {Booleanish, ButtonVariant, ClassValue, Size} from '../../types'
import {omit} from '../../utils'
import BDropdown from '../BDropdown/BDropdown.vue'

// TODO see how this works in a b-collapse navbar ie https://bootstrap-vue.org/docs/components/navbar first example
interface BNavItemDropdownProps {
  id?: string
  text?: string
  toggleClass?: ClassValue
  size?: Size
  offset?: string
  autoClose?: boolean | 'inside' | 'outside'
  dark?: Booleanish
  splitVariant?: ButtonVariant
  noCaret?: Booleanish
  variant?: ButtonVariant
  modelValue?: Booleanish
  lazy?: Booleanish
  strategy?: Strategy
  floatingMiddleware?: Middleware[]
  noFlip?: Booleanish
  noShift?: Booleanish
  dropup?: Booleanish
  dropend?: Booleanish
  dropstart?: Booleanish
  alignStart?: Booleanish
  alignEnd?: Booleanish
  menuClass?: ClassValue
}

const props = withDefaults(defineProps<BNavItemDropdownProps>(), {
  variant: 'link',
  modelValue: false,
})

interface Emits {
  (e: 'update:modelValue', value: boolean): void
}

const emit = defineEmits<Emits>()

const modelValue = useVModel(props, 'modelValue', emit)

const modelValueBoolean = useBooleanish(modelValue)

const dropdownValue = computed({
  get() {
    return modelValueBoolean.value
  },
  set(value: boolean) {
    modelValue.value = value
  },
})
const usableProps = computed(() => omit(props, ['modelValue'] as const))
</script>
