import { EBCED_MAP, IS_TENVIN, TENVIN_VALUE, SEDDE, SPACE } from './chars'

export const isMuted = chars => chars.every(char => char in EBCED_MAP)
export const isSedde = chars => chars.some(char => char === SEDDE)
export const isTenvin = chars => chars.some(char => IS_TENVIN(char))

export const calculatePlain = (group) => {
	let value = 0
	
	if (group.chars[0] === SPACE) return value

	if (!isMuted(group.chars)) {
		value += EBCED_MAP[group.chars[0]]
	}

	return value
}

export const calculateWithMuted = group => {
	let value = 0

	value += calculatePlain(group)

	if (isMuted(group.chars)) {
		value += EBCED_MAP[group.chars[0]]
	}

	return value
}

export const calculateWithMutedSedde = group => {
	let value = 0

	value += calculateWithMuted(group)

	if (isSedde(group.chars)) {
		value = value * 2
	}

	return value
}

export const calculateWithMutedSeddeTenvin = group => {
	let value = 0

	value += calculateWithMutedSedde(group)

	if (isTenvin(group.chars)) {
		value += TENVIN_VALUE
	}

	return value
}

export const calculateEverything = calculateWithMutedSeddeTenvin