<script>
	import { onMount } from 'svelte';

	export let tip = '';
	export let active = false;

	let loaded = false;
	onMount(() => (loaded = true));
</script>

{#if loaded && tip}
	<div class="tooltip-wrapper">
		<span class="tooltip" class:active>
			{tip}
		</span>
		<span class="tooltip-slot">
			<slot />
		</span>
	</div>
{:else}
	<slot />
{/if}

<style lang="scss">
	.tooltip-wrapper {
		position: relative;
		display: inline-block;

		&:hover .tooltip {
			opacity: 1;
			visibility: visible;
			margin-top: -8px;
		}
	}

	.tooltip {
		position: absolute;
		left: 50%;
		top: 0%;
		transform: translate(-50%, -120%);
		white-space: nowrap;

		opacity: 0;
		visibility: hidden;
		transition:
			opacity 0.2s ease-in-out,
			visibility 0.2s ease-in-out,
			margin-top 0.2s ease-in-out;

		padding: 0.25rem 0.6rem;
		border-radius: 8px;

		/* ===== LIGHT THEME COLORS ===== */
		background-color: #f2f2f2;   /* abu terang */
		color: #000000;              /* teks hitam */
		border: 1px solid #000000;

		font-size: 0.8rem;
		font-family: var(--font-two);
		font-weight: 300;
		letter-spacing: -0.05em;
		line-height: 1;

		/* arrow */
		&::after {
			content: '';
			position: absolute;
			left: 50%;
			bottom: -6px;
			transform: translateX(-50%);

			border-left: 6px solid transparent;
			border-right: 6px solid transparent;
			border-top: 6px solid #f2f2f2;
		}

		&.active {
			opacity: 1;
			visibility: visible;
			margin-top: -8px;
		}
	}
</style>
