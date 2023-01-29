<script>
	import ColorSwitch from '$lib/components/switch/color-switch.svelte';
</script>

<main class="max-w-6xl mx-auto">
	<span class="flex justify-end">
		<ColorSwitch />
	</span>
	<slot />
</main>
