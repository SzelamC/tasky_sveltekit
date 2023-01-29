<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import SubmitButton from '$lib/components/button/submit-button.svelte';
	import FormBox from '$lib/components/form/form-box.svelte';
	import InputField from '$lib/components/form/input-field.svelte';
	import { trpc } from '$lib/trpc/client';

	const userInput = {
		email: '',
		password: ''
	};

	async function login() {
		try {
			const res = await trpc($page).user.login.mutate(userInput);
			console.log(res);
			goto('/');
		} catch (err) {
			console.error(err);
		}
	}
</script>

<main class="max-w-6xl mx-auto">
	<FormBox title="Login" on:submit={login}>
		<InputField
			type="email"
			id="email"
			label="email"
			placeholder="Email"
			bind:value={userInput.email}
		/>
		<InputField
			type="password"
			id="password"
			label="password"
			placeholder="Password"
			bind:value={userInput.password}
		/>
		<SubmitButton buttonText="login" />
		<div class="flex justify-between">
			<a href="/forgot-password" class="text-xs">Forgot Password?</a>
			<a href="/register" class="text-xs">Sign Up</a>
		</div>
		<p class="text-sm text-gray-500 text-center">or you can sign in with</p>
		<div class="flex justify-center gap-6">
			<button class="btn btn-sm btn-accent rounded-full">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" class="w-4 h-4 fill-black"
					><path
						d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
					/></svg
				>
			</button>
			<button class="btn btn-sm btn-accent rounded-full">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-black"
					><path
						d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
					/></svg
				>
			</button>
		</div>
	</FormBox>
</main>
