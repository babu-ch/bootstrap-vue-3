import type {InjectionKey} from 'vue'
import type {
  BAvatarGroupParentData,
  BCarouselParentData,
  BListGroupParentData,
  BProgressParentData,
  BTabsParentData,
} from '../types/components'
import type {UseBreadcrumbOptions} from '../composables/useBreadcrumb'

// BCarousel
export const carouselInjectionKey: InjectionKey<BCarouselParentData> = Symbol('carousel')

// BTabs
export const tabsInjectionKey: InjectionKey<BTabsParentData> = Symbol('tabs')

// useBreadcrumb
export const breadcrumbInjectionKey: InjectionKey<UseBreadcrumbOptions> = Symbol('breadcrumb')

// BProgress
export const progressInjectionKey: InjectionKey<BProgressParentData> = Symbol('progress')

// BListGroup
export const listGroupInjectionKey: InjectionKey<BListGroupParentData> = Symbol('listGroup')

// BAvatarGroup
export const avatarGroupInjectionKey: InjectionKey<BAvatarGroupParentData> = Symbol('avatarGroup')

// BAccordion
export const accordionInjectionKey: InjectionKey<string> = Symbol('accordion')
