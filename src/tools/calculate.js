import { EBCED_MAP, IS_TENVIN, TENVIN_VALUE, SEDDE } from './chars'

export const calculatePlain = (group) => {
	let value = 0

	if (group.chars[0] in EBCED_MAP) {
		value = EBCED_MAP[group.chars[0]]
	}

	return value
}

export const calculateWithMuted = group => {
	let value = 0

	value += calculatePlain(group)

	if (group.chars.every(char => char in EBCED_MAP)) {
		value = EBCED_MAP[group.chars[0]]
	}

	return value
}

export const calculateWithMutedSedde = group => {
	let value = 0

	value += calculateWithMuted(group)

	if (group.chars.some(char => char === SEDDE)) {
		value = value * 2
	}

	return value
}

export const calculateWithMutedSeddeTenvin = group => {
	let value = 0

	value += calculateWithMutedSedde(group)

	if (group.chars.some(char => IS_TENVIN(char))) {
		value += TENVIN_VALUE
	}

	return value
}

export const calculateEverything = calculateWithMutedSeddeTenvin