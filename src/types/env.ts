import type { envSchema } from '#/schemas/env'
import type * as v from 'valibot'

export type EnvVariables = v.InferOutput<typeof envSchema>
