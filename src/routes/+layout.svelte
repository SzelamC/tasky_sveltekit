<script lang="ts">
	import '../app.scss';
	import useColorMode from '$lib/store/color-mode';
	import Navbar from '$lib/components/navbar/navbar.svelte';
	useColorMode();
</script>

<div class="h-full flex flex-col items-center">
	<Navbar />
	<main class="max-w-6xl w-full h-full">
		<slot />
	</main>
</div>
