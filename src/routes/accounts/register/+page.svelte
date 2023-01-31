<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import SubmitButton from '$lib/components/button/submit-button.svelte';
	import FormBox from '$lib/components/form/form-box.svelte';
	import InputField from '$lib/components/form/input-field.svelte';
	import { trpc } from '$lib/trpc/client';

	// Local variable
	const userInput = {
		email: '',
		username: '',
		password: ''
	};

	// Event listener
	async function register() {
		try {
			const res = await trpc($page).user.register.mutate(userInput);
			console.log(res);
			goto('/');
		} catch (err) {
			console.error(err);
		}
	}
</script>

<FormBox title="Sign up" on:submit={register}>
	<InputField
		type="email"
		id="email"
		label="email"
		placeholder="Email"
		bind:value={userInput.email}
	/>
	<InputField
		type="text"
		id="username"
		label="username"
		placeholder="Username"
		bind:value={userInput.username}
	/>
	<InputField
		type="password"
		id="password"
		label="password"
		placeholder="Password"
		bind:value={userInput.password}
	/>
	<SubmitButton buttonText="register" />
	<a href="/accounts/login" class="rounded-btn inline-flex max-w-fit items-center text-sm">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="h-4 w-4 fill-current"
			><path
				d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"
			/></svg
		>
		Back</a
	>
</FormBox>
