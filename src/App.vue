<template>
	<div class="app">
		<h1>Ebced Hesapla</h1>
		<textarea
			class="text-input"
			dir="rtl"
			rows="5"
			placeholder="Ebced hesabı yapılacak arapça metin"
			v-model="text"
		></textarea>

		<div class="buttons">
			<button @click="reset" class="calculate-btn">
				Reset
			</button>
			
			<button @click="calculate" class="calculate-btn">
				Hesapla
			</button>
		</div>
			
		<h2>Sonuç: {{total}}</h2>

		<div class="ebced-presenter">
			<EbcedGroup v-for="(group, i) in groups" :group="group" :key="i"></EbcedGroup>
		</div>
	</div>
</template>

<script>
import EbcedGroup from './components/EbcedGroup.vue'
import { EBCED_MAP, SPACE } from "./tools/chars"

export default {
	name: 'App',
	components: {
		EbcedGroup
	},
	data() {
		return {
			text: '',
			groups: [],
			total: 0
		}
	},
	watch: {
		groups: {
			deep: true,
			handler() {
				console.log('DEGISTI')
				this.total = this.groups.reduce((acc, val) => acc + val.value, 0)
			}
		}
	},
	methods: {
		calculate() {
			let lastGroup = null
			const groups = []

			this.text.split('').forEach(char => {
				if (char in EBCED_MAP || char === SPACE) {
					const group = { chars: [char], value: 0 }
					lastGroup = group
					groups.push(group)
				} else {
					lastGroup.chars.push(char)
				}
			})

			this.groups = groups
		},
		reset() {
			this.text = ''
			this.groups = []
		}
	},
}
</script>

<style scoped>
@import "~normalize.css";

.app {
	font-family: sans-serif;
	font-size: 150%;
	padding: 1em;
	display: flex;
	flex-direction: column;
}

.buttons {
	display: flex;
	justify-content: center;
	width: 100%;
}

.calculate-btn {
	padding: 10px;
	flex: 1;
}

.buttons > button:first-child {
	margin-right: 1em;
}

h1 {
	margin-bottom: .5em;
	font-size: 1.5em;
}

h2 {
	font-size: 1.4em;
}

.text-input {
	width: 100%;
	padding: .5em;
	margin-bottom: .5em;
	font-size: 1.5em;
	color: red;
	min-height: 5em;
	font-family: serif;
	box-sizing: border-box;
}

.ebced-presenter {
	direction: rtl;
}
</style>
