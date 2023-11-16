import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "about" | "default" | "products"
declare module "/home/frankidev/Nuxt market/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}