/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
import { describe, it, expect } from 'vitest'
import fs from 'node:fs'

import {
  contexts,
  constants,
  CONTEXT_URL_V1,
  CONTEXT_V1
} from '../../src/index.js'

const contextUrl = constants.CONTEXT_URL_V1

describe('App Connect Context', () => {
  it('constants', () => {
    expect(constants).toBeDefined()
    expect(CONTEXT_URL_V1).toBeDefined()
    expect(CONTEXT_V1).toBeDefined()
  })

  it('contexts', () => {
    expect(contexts.get(contextUrl)).toHaveProperty('@context')
  })

  it('serialized .jsonld matches the source context', () => {
    const serialized = fs.readFileSync(
      new URL(`../../contexts/${constants.CONTEXT_FILENAME}`, import.meta.url),
      'utf8'
    )
    expect(JSON.parse(serialized)).toEqual(CONTEXT_V1)
  })
})
