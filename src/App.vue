<template>
	<div class="row mt-2">
		<div class="col">
			<h1 class="h4">Ebced Hesapla</h1>

			<div class="form-group">
				<textarea
					class="form-control text-input"
					dir="rtl"
					rows="2"
					placeholder="Ebced hesabı yapılacak arapça metin"
					v-model="text"
				></textarea>
			</div>

			<div class="form-group d-flex">
				<button @click="reset" class="btn btn-danger calculate-btn ml-auto">
					Sıfırla
				</button>

				<button @click="calculate" class="btn btn-primary calculate-btn ml-1">
					Hesapla
				</button>
			</div>

			<div class="ebced-presenter">
				<EbcedGroup v-for="(group, i) in groups" :group="group" :key="i"></EbcedGroup>
			</div>
		</div>

		<nav class="navbar fixed-bottom navbar-dark bg-success">
			<span class="ml-auto navbar-brand">Yekûn: {{total}}</span>
		</nav>
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
@import "~bootstrap/dist/css/bootstrap.css";

.text-input {
	color: red;
}

.ebced-presenter {
	direction: rtl;
}
</style>
