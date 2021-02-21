<template>
	<div class="row mt-3">
		<div class="col">

			<section>
				<h1 class="h5 pb-2">EBCED HESAP MAKİNESİ</h1>

				<div class="form-group">
					<div class="position-relative">
						<textarea
							class="form-control the-input"
							dir="rtl"
							rows="2"
							v-model="text"
						></textarea>
						<div class="help-text text-muted position-absolute w-100 text-right p-4" v-if="!text.length">
							Lütfen Arapca metni giriniz.
						</div>
					</div>
					<small class="form-text text-muted">
						Hesaplamak istediğiniz Arapca metini üstteki kutucuğa giriniz. Giriş yaptıkça otomatik hesaplayacaktır.
						(<a href="#" @click.prevent="showExample()">Misal</a>)
					</small>
				</div>
			</section>

			<section class="mb-5">
				<div class="pb-2 border-bottom d-flex mb-3">
					<h2 class="h5 pb-0 mb-0">Hesap Tablosu (<a href="#" @click.prevent="showInfo()">?</a>)</h2>
					<span class="ml-auto text-muted">Manuel Hesaplama</span>
				</div>
				<div class="alert alert-warning" v-if="!groups.length">
					Hesaplanacak metini henüz girmediniz.
				</div>
				<div class="ebced-presenter">
					<EbcedGroup v-for="(group, i) in groups" :group="group" :key="i"></EbcedGroup>
				</div>
				<div class="d-flex mt-2 pt-2 border-top">
					<span class="ml-auto">Toplam: {{total}}</span>
				</div>
			</section>


			<section class="mb-5">
				<h2 class="h5 pb-2 border-bottom">Özet Tablo</h2>

				<table class="table table-bordered">
					<tbody>
						<tr>
							<td>Manuel hesaplama</td>
							<td>{{total}}</td>
						</tr>
						<tr>
							<td>Hepsi sayılırsa (Harfler+Harekesiz harfler+Sedde+Tenvin)</td>
							<td>{{totalEverything}}</td>
						</tr>
						<tr>
							<td>Tenvinler sayılmazsa (Harfler+Harekesiz harfler+Sedde)</td>
							<td>{{totalTenvinNotCounted}}</td>
						</tr>
						<tr>
							<td>Seddeler sayılmazsa (Harfler+Harekesiz harfler)</td>
							<td>{{totalSeddeNotCounted}}</td>
						</tr>
						<tr>
							<td>Harekesiz harfler sayılmazsa (Sadece Harfler)</td>
							<td>{{totalMutedNotCounted}}</td>
						</tr>
					</tbody>
				</table>
			</section>
		</div>

		<nav class="navbar fixed-bottom navbar-dark bg-success">
			<!-- <span class="navbar-brand">Kullanım talimatları</span> -->
			<span class="ml-auto navbar-brand">Yekûn: {{total}}</span>
		</nav>
	</div>
</template>

<script>
import EbcedGroup from './components/EbcedGroup.vue'
import { EBCED_MAP, SPACE } from "./tools/chars"
import { calculateEverything, calculatePlain, calculateWithMuted, calculateWithMutedSedde } from './tools/calculate'
export default {
	name: 'App',
	components: {
		EbcedGroup
	},
	data() {
		return {
			text: '',
			groups: [],
			total: 0,
			totalEverything: 0,
			totalTenvinNotCounted: 0,
			totalSeddeNotCounted: 0,
			totalMutedNotCounted: 0,
		}
	},
	watch: {
		groups: {
			deep: true,
			handler() {
				console.log('DEGISTI')
				this.total = this.groups.reduce((acc, val) => acc + val.value, 0)
			}
		},
		text() {
			this.calculate()
		}
	},
	methods: {
		calculate() {
			let lastGroup = null
			this.groups.splice(0, this.groups.length)
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

			this.totalEverything = groups.reduce((acc, group) => (acc + calculateEverything(group)), 0)
			this.totalTenvinNotCounted = groups.reduce((acc, group) => (acc + calculateWithMutedSedde(group)), 0)
			this.totalSeddeNotCounted = groups.reduce((acc, group) => (acc + calculateWithMuted(group)), 0)
			this.totalMutedNotCounted = groups.reduce((acc, group) => (acc + calculatePlain(group)), 0)

			this.groups = groups
		},
		reset() {
			this.text = ''
			this.groups = []
		},
		showExample() {
			this.text = "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ"
		},
		showInfo() {
			alert(`Aşağıdaki tabloda;

● tenvinli harfler 📕 kırmızı,
● şeddeli harfler 📘 mavi,
● harekesiz harfler 📗 yeşil

olarak gösterilmiştir. Bu renkli kutuların üzerine tıklayarak
hesaba dahil et/etme olarak ayarlayabilirsiniz.`)
		}
	},
}
</script>

<style scoped>
@import "~bootstrap/dist/css/bootstrap.css";

.the-input {
	color: red;
	font-family: serif;
	font-size: 2em;
}

.help-text {
	top: 0;
	pointer-events: none;
}

.ebced-presenter {
	direction: rtl;
	text-align: right;
}
</style>
