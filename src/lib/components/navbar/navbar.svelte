<script lang="ts">
	import { ColorSwitch } from '../switch';
</script>

<nav class="navbar sticky top-0 bg-base-100 bg-opacity-20 backdrop-blur-sm">
	<div class="flex-none">
		<button class="btn-ghost btn-square btn rounded-xl">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block h-5 w-5 stroke-current"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/></svg
			>
		</button>
	</div>
	<div class="flex-1">
		<a href="/" class="btn-ghost btn-md btn rounded-xl text-3xl normal-case">Tasky</a>
	</div>
	<div class="flex-none gap-10">
		<a
			href="/accounts/login"
			class="text-slide relative text-lg font-bold text-primary hover:text-primary-focus">Sign in</a
		>
		<span class="hidden md:inline">
			<ColorSwitch />
		</span>
	</div>
</nav>
