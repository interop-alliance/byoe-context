/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
import { describe, it, expect } from 'vitest'
import fs from 'node:fs'

import {
  contexts,
  constants,
  CONTEXT_URL_V1,
  CONTEXT_V1,
  VOCAB_CONTEXT_URL,
  CONTEXT_VOCAB_V1
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

describe('BYOE vocab context', () => {
  it('constants', () => {
    expect(constants).toBeDefined()
    expect(VOCAB_CONTEXT_URL).toBeDefined()
    expect(CONTEXT_VOCAB_V1).toBeDefined()
  })

  it('is served at the versioned vocab URL', () => {
    expect(VOCAB_CONTEXT_URL).toBe('https://w3id.org/byoe/v1')
  })

  it('contexts', () => {
    expect(contexts.get(VOCAB_CONTEXT_URL)).toHaveProperty('@context')
  })

  it('defines MultikeyCommitment and publicKeyCommitment', () => {
    const vocabContext = CONTEXT_VOCAB_V1['@context']
    expect(vocabContext.MultikeyCommitment).toEqual({
      '@id': 'https://w3id.org/security#MultikeyCommitment',
      '@context': {
        '@protected': true,
        id: '@id',
        type: '@type',
        controller: {
          '@id': 'https://w3id.org/security#controller',
          '@type': '@id'
        },
        publicKeyCommitment: 'https://w3id.org/security#publicKeyCommitment'
      }
    })
  })

  it('serialized .jsonld matches the source context', () => {
    const serialized = fs.readFileSync(
      new URL(
        `../../contexts/${constants.VOCAB_CONTEXT_FILENAME}`,
        import.meta.url
      ),
      'utf8'
    )
    expect(JSON.parse(serialized)).toEqual(CONTEXT_VOCAB_V1)
  })
})
