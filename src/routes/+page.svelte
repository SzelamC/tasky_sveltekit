<script lang="ts">
</script>

<div class="flex h-full flex-col justify-center gap-8">
	<h1 class="fade text-center font-major text-6xl">Welcome to tasky</h1>
	<h1 class="fade text-center font-major text-6xl">Mark your task now</h1>
</div>

<style lang="scss">
	.fade:first-child {
		animation: fade-in 1s ease-in 0.5s forwards;
		opacity: 0;
		transform: translateX(-50px);
	}

	.fade:nth-child(2) {
		animation: fade-in 1s ease-in 1s forwards;
		opacity: 0;
		transform: translateX(-50px);
	}

	@keyframes fade-in {
		to {
			opacity: 1;
			transform: translateX(0px);
		}
	}
</style>
