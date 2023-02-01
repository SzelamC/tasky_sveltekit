<div class="grid h-1/2 place-items-center">
	<h1 class="typewriter relative max-w-fit font-major text-6xl">Welcome to tasky...</h1>
</div>

<style lang="scss">
	.typewriter::before,
	.typewriter::after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.typewriter::before {
		@apply bg-base-300;
		animation: type-writer 4s steps(19) 1s forwards;
	}

	.typewriter::after {
		@apply bg-current;
		width: 0.05em;
		animation: type-writer 4s steps(19) 1s forwards, caret-blink 750ms steps(19) infinite;
	}

	@keyframes type-writer {
		to {
			left: 100%;
		}
	}

	@keyframes caret-blink {
		to {
			background: transparent;
		}
	}
</style>
