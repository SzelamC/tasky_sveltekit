<script lang="ts">
	export let title: string;
</script>

<form
	class="mt-6 p-6 form-control w-full flex items-center justify-center"
	on:submit|preventDefault
>
	<h1 class="mb-6 text-4xl text-primary font-mplus font-bold">{title}</h1>
	<div class="max-w-lg w-full flex flex-col gap-6">
		<slot />
	</div>
</form>
