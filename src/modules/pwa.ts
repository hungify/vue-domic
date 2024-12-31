export async function install() {
  const { registerSW } = await import('virtual:pwa-register')
  registerSW({ immediate: true })
}
