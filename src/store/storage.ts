export function loadState<T>(key: string): T | undefined {
	try {
		const jsonState = localStorage.getItem(key);
		if (!jsonState) {
			return undefined;
		}
	} catch (e) {
		console.error(e);
		return undefined;
	}
}

export function saveState<T>(key: string, state: T | null) {
	if (state === null) {
		localStorage.removeItem(key);
	} else {
		const stringState = JSON.stringify(state);
		localStorage.setItem(key, stringState);
	}
}
