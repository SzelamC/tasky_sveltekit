<script lang="ts">
	import '../app.scss';
	import useColorMode from '$lib/store/color-mode';
	import Navbar from '$lib/components/navbar/navbar.svelte';
	useColorMode();
</script>

<div class="flex h-full flex-col items-center">
	<Navbar />
	<main class="h-full w-full max-w-6xl">
		<slot />
	</main>
</div>
