import * as v from 'valibot'

export const envSchema = v.object({
  baseUrl: v.string(),
  dev: v.boolean(),
  mode: v.picklist(['development', 'production', 'test', 'staging']),
  prod: v.boolean(),
  ssr: v.boolean(),

})
