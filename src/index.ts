import { CONTEXT_V1, CONTEXT_VOCAB_V1 } from './context.js'
import * as constants from './constants.js'
import { CONTEXT_URL_V1, VOCAB_CONTEXT_URL } from './constants.js'

export const contexts = new Map<
  string,
  typeof CONTEXT_V1 | typeof CONTEXT_VOCAB_V1
>([
  [CONTEXT_URL_V1, CONTEXT_V1],
  [VOCAB_CONTEXT_URL, CONTEXT_VOCAB_V1]
])

export {
  constants,
  CONTEXT_URL_V1,
  CONTEXT_V1,
  VOCAB_CONTEXT_URL,
  CONTEXT_VOCAB_V1
}
