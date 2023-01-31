<script lang="ts">
	export let type: 'email' | 'text' | 'password';
	export let id: string;
	export let label: string;
	export let placeholder: string;
	export let value: string;

	function setInputType(node: HTMLInputElement) {
		node.type = type;
	}
</script>

<span>
	<label class="label" for={id}>
		<span class="label-text capitalize text-primary">{label}</span>
	</label>
	<input
		{id}
		{placeholder}
		use:setInputType
		bind:value
		class="input-bordered input-primary input input-md w-full rounded-3xl"
	/>
</span>
