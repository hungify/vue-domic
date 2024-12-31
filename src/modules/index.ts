import type { App } from 'vue'

export async function initializePlugins(app: App) {
  const imports = import.meta.glob<{ install: (app: App) => void }>([
    './*.ts',
  ])

  const importPaths = Object.keys(imports).sort()

  for (const path of importPaths) {
    const plugin = await imports[path]()
    plugin.install(app)
  }
}
