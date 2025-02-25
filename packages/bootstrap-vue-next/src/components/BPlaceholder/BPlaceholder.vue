<template>
  <component :is="wrapperTag" :class="wrapperClasses">
    <component
      v-bind="$attrs"
      :is="tag"
      class="placeholder"
      :class="computedClasses"
      :style="computedStyle"
    />
  </component>
</template>

<script setup lang="ts">
import {computed, type StyleValue} from 'vue'
import type {ColorVariant, PlaceholderAnimation, PlaceholderSize} from '../../types'

interface Props {
  tag?: string
  wrapperTag?: string
  width?: string | number
  cols?: string | number
  variant?: ColorVariant
  size?: PlaceholderSize
  animation?: PlaceholderAnimation
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'span',
  wrapperTag: 'span',
  cols: 12,
})

const widthString = computed<string | undefined>(() =>
  props.width === undefined
    ? undefined
    : typeof props.width === 'number'
    ? props.width.toString()
    : props.width.includes('%')
    ? props.width.replaceAll('%', '')
    : props.width
)

const colsString = computed<string | undefined>(() =>
  props.cols === undefined
    ? undefined
    : typeof props.cols === 'number'
    ? props.cols.toString()
    : props.cols
)

const computedClasses = computed(() => ({
  [`col-${colsString.value}`]: colsString.value !== undefined && widthString.value === undefined,
  [`bg-${props.variant}`]: props.variant !== undefined,
  [`placeholder-${props.size}`]: props.size !== undefined,
}))

const wrapperClasses = computed(() => ({
  [`placeholder-${props.animation}`]: props.animation !== undefined,
}))

const computedStyle = computed<StyleValue | undefined>(() =>
  widthString.value === undefined ? undefined : `width: ${widthString.value}%;`
)
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
