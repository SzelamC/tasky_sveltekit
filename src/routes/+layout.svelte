<script lang="ts">
	import '../app.css';
	import useColorMode from '$lib/store/color-mode';
	import Navbar from '$lib/components/navbar/navbar.svelte';
	useColorMode();
</script>

<Navbar />
<slot />
