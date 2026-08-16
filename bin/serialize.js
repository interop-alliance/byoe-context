#!/usr/bin/env node
/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { CONTEXT_V1, CONTEXT_VOCAB_V1, constants } from '../dist/index.js'

const dir = path.dirname(fileURLToPath(import.meta.url))

// Serialize the App Connect context as JSON-LD
fs.writeFileSync(
  path.join(dir, '..', 'contexts', constants.CONTEXT_FILENAME),
  JSON.stringify(CONTEXT_V1, null, 2) + '\n'
)

// Serialize the bare BYOE vocab context as JSON-LD
fs.writeFileSync(
  path.join(dir, '..', 'contexts', constants.VOCAB_CONTEXT_FILENAME),
  JSON.stringify(CONTEXT_VOCAB_V1, null, 2) + '\n'
)
