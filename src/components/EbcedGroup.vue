<template>
	<div
		tabindex="0"
		class="char-group"
		:class="{ sedde: isSedde, space: isSpace, tenvin: isTenvin, muted: isMuted }"
		@click="changeValue">
		<div class="chars">{{ group.chars.join('') }}</div>
		<div class="value">{{ presentValue }}</div>
	</div>
</template>

<script>
import { EBCED_MAP, SEDDE, SPACE, IS_TENVIN, TENVIN_VALUE } from "../tools/chars"

export default {
	props: {
		group: Object
	},
	data() {
		return {
			countSedde: true,
			countTenvin: true,
			countMuted: true
		}
	},
	mounted() {
		this.calculate()
	},
	updated() {
		this.calculate()
	},
	computed: {
		isMuted() {
			return this.group.chars.every(char => char in EBCED_MAP)
		},
		isTenvin() {
			return this.group.chars.some(char => IS_TENVIN(char))
		},
		isSedde() {
			return this.group.chars.some(char => char === SEDDE)
		},
		isSpace() {
			return this.group.chars[0] === SPACE
		},
		baseValue() {
			return EBCED_MAP[this.group.chars[0]]
		},
		presentValue() {
			if (this.isSedde) {
				return `${this.countSedde ? '2X' : '1X'}${this.baseValue}`
			} else if (this.isTenvin) {
				return `${this.baseValue}+${this.countTenvin ? TENVIN_VALUE : 0}`
			} else if (this.isMuted) {
				return `${this.countMuted ? this.baseValue : 0}`
			} else {
				return '' + this.group.value
			}
		},
	},
	methods: {
		changeValue() {
			if (this.isSedde) {
				this.countSedde = !this.countSedde
			}

			if (this.isTenvin) {
				this.countTenvin = !this.countTenvin
			}

			if (this.isMuted) {
				this.countMuted = !this.countMuted
			}

			this.calculate()
		},
		calculate() {
			let value = 0

			if (this.group.chars[0] in EBCED_MAP) {
				value = EBCED_MAP[this.group.chars[0]]
			}

			if (this.isSedde && this.countSedde) {
				value = value * 2
			}

			if (this.isTenvin) {
				value += this.countTenvin ? TENVIN_VALUE : 0
			}

			if (this.isMuted) {
				value = this.countMuted ? EBCED_MAP[this.group.chars[0]] : 0
			}

			this.group.value = value
		}
	}
}
</script>

<style scoped>
.char-group {
	display: inline-block;
	text-align: center;
	width: 2.2em;
	border-radius: .1em;
	border: 1px solid #ccc;
	margin-bottom: .5em;
	margin-left: .5em;
}

.chars {
	padding: 5px 10px;
	font-family: 'Amiri', serif;
	border-bottom: 1px solid #ccc;
	font-size: 1.5em;
}

.value {
	font-size: .5em;
	padding: 5px 0;
}

.sedde {
	border: 1px solid rgb(0, 90, 255);
	color: rgb(0, 90, 255);
	background-color: rgba(0, 90, 255, .1);
}

.tenvin {
	border: 1px solid rgb(255, 65, 74);
	color: rgb(255, 65, 74);
	background-color: rgba(255, 65, 74, .1);
}

.muted {
	border: 1px solid rgb(85, 197, 0);
	color: rgb(85, 197, 0);
	background-color: rgba(85, 197, 0, .1);
}

.space {
	visibility: hidden;
}
</style>