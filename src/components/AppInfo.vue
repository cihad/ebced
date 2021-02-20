<template>
	<div class="modal fade" id="exampleModal" tabindex="-1">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Kullanım Talimatları</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		open: {
			default: false
		}
	},
	data() {
		return {
			showModal: this.open
		}
	},
}
</script>