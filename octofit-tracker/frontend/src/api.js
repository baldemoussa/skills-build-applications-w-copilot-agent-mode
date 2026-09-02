const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

export function normalizeCollection(payload) {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload.data)) return payload.data
  if (Array.isArray(payload.results)) return payload.results
  if (Array.isArray(payload.items)) return payload.items

  return []
}

export async function fetchCollection(resourceOrEndpoint) {
  const endpoint = resourceOrEndpoint.startsWith('http')
    ? resourceOrEndpoint
    : `${apiBaseUrl}/api/${resourceOrEndpoint}/`
  const response = await fetch(endpoint)

  if (!response.ok) {
    throw new Error(`Unable to load ${resourceOrEndpoint}`)
  } 

  return normalizeCollection(await response.json())
}