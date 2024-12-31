import type { EnvVariables } from '#/types/env'
import { envSchema } from '#/schemas/env'
import * as v from 'valibot'

export const envVariables = {
  // base
  baseUrl: import.meta.env.BASE_URL,
  dev: import.meta.env.DEV,
  mode: import.meta.env.MODE as EnvVariables['mode'],
  prod: import.meta.env.PROD,
  ssr: import.meta.env.SSR,

} satisfies EnvVariables

export function loadEnvVariables() {
  v.parse(envSchema, envVariables)
}
