<script lang="ts">
	export let title: string;
</script>

<form
	class="form-control mt-6 flex w-full items-center justify-center p-6"
	on:submit|preventDefault
>
	<h1 class="mb-6 font-mplus text-4xl font-bold text-primary">{title}</h1>
	<div class="flex w-full max-w-lg flex-col gap-6">
		<slot />
	</div>
</form>
