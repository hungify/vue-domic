import type { App } from 'vue'
import { envVariables } from '#/utils/env'
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

export function install(app: App) {
  const router = createRouter({
    history: createWebHistory(envVariables.baseUrl),
    routes: setupLayouts(routes),
  })
  app.use(router)
}
