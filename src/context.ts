export const CONTEXT_V1 = {
  '@context': {
    '@protected': true,
    id: '@id',
    type: '@type',
    AppKeyCredential: 'https://w3id.org/byoe#AppKeyCredential',
    LoginCredential: 'https://w3id.org/byoe#LoginCredential',
    appUrl: 'https://w3id.org/byoe#appUrl',
    seed: 'https://w3id.org/byoe#seed',
    origin: 'https://w3id.org/byoe#origin',
    preferredUsername:
      'https://www.w3.org/ns/activitystreams#preferredUsername',
    name: 'https://schema.org/name',
    description: 'https://schema.org/description',
    zcap: {
      '@id': 'https://w3id.org/byoe#zcap',
      '@container': '@set'
    },
    appConnect: {
      '@id': 'https://w3id.org/byoe#appConnect',
      '@type': '@json'
    }
  }
}

/**
 * The bare BYOE vocab context, served at `https://w3id.org/byoe`. Defines the
 * `MultikeyCommitment` verification-method type used by did:webvh documents
 * that publish hash-commitment verification methods, conceptually
 * inheriting from `https://w3id.org/security#Multikey`.
 */
export const CONTEXT_VOCAB_V1 = {
  '@context': {
    '@protected': true,
    id: '@id',
    type: '@type',
    MultikeyCommitment: {
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
    }
  }
}
