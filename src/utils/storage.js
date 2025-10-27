
const KEY = 'workout-tracker'

function profileKey(name) {
	if (!name) return KEY
	return `${KEY}-${name}`
}

export function loadLocal(name) {
	const k = profileKey(name)
	try { return JSON.parse(localStorage.getItem(k) || 'null') } catch { return null }
}

export function saveLocal(state, name) {
	const k = profileKey(name)
	try { localStorage.setItem(k, JSON.stringify(state)) } catch {}
}

export function clearLocal(name) {
	const k = profileKey(name)
	try { localStorage.removeItem(k) } catch {}
}

// Backwards compatible helpers
export function loadDefault() { return loadLocal() }
export function saveDefault(state) { return saveLocal(state) }
