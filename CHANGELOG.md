# byoe-context ChangeLog

## 0.5.0 - 2026-08-16

### Changed

- **BREAKING**: `VOCAB_CONTEXT_URL` changes from `https://w3id.org/byoe` to
  `https://w3id.org/byoe/v1`, and the serialized file moves from
  `contexts/byoe-v1.jsonld` to `contexts/v1.jsonld` (`VOCAB_CONTEXT_FILENAME`).
  The versioned URL dereferences under the existing w3id.org redirect rule
  (`/byoe/v1` to `contexts/v1.jsonld` on the GitHub Pages site); the bare
  `/byoe` path remains a redirect to the vocabulary homepage. The context
  contents are unchanged. Documents already minted with the bare URL are
  unaffected but will not dereference; consumers should mint against the
  versioned URL.

## 0.4.0 - 2026-08-15

### Added

- Add a second context document, the bare BYOE vocab context served at
  `https://w3id.org/byoe` (`VOCAB_CONTEXT_URL` / `CONTEXT_VOCAB_V1`, serialized
  to `contexts/byoe-v1.jsonld`). Defines the `MultikeyCommitment`
  verification-method type (`https://w3id.org/security#MultikeyCommitment`) and
  its `publicKeyCommitment` property
  (`https://w3id.org/security#publicKeyCommitment`, a plain string, not
  multibase), for did:webvh documents that publish hash-commitment verification
  methods.

### Changed

- Vocab page: rename the descriptor-type entries `collection` to
  `private-collection` and `shared-collection` to `shared-wallet-collection`,
  matching the App Connect spec; the retired spellings are removed.
- Vocab page: mark the `space` entry reserved, matching the App Connect spec's
  reserved-descriptor table.

## 0.3.0 - 2026-08-10

### Added

- Add the `appUrl` term (`https://w3id.org/byoe#appUrl`) to `CONTEXT_V1`, with a
  matching entry on the vocab page.

## 0.2.0 - 2026-08-01

### Added

- Add the `LoginCredential` term (`https://w3id.org/byoe#LoginCredential`) and
  the `preferredUsername` term (the ActivityStreams IRI) to `CONTEXT_V1`, with a
  matching `LoginCredential` entry on the vocab page.

## 0.1.0 - TBD

Initial version.
