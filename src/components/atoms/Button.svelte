<script>
	export let side = false;
</script>

<button on:click on:keypress class:button-with-side={side}>
	<div class="side" />
	<slot />
</button>

<style lang="scss">
	button {
		/* layout */
		display: flex;
		align-items: center;
		position: relative;
		width: max-content;
		margin: 0;
		padding: 1rem 2rem;
		border-radius: 16px;
		cursor: pointer;
		user-select: none;

		/* typography */
		font-family: var(--font-two);
		font-size: 1.6rem;
		font-weight: 300;
		letter-spacing: -0.075em;

		/* LIGHT THEME COLORS */
		background-color: #f2f2f2;      /* abu terang */
		color: #000000;                 /* TEKS HITAM */
		border: 1px solid #000000;

		/* motion */
		transition:
			filter 0.2s var(--bezier-one),
			transform 0.15s var(--bezier-one);

		&:hover {
			filter: brightness(95%);
		}

		&:active {
			transform: scale(0.97);
		}

		@media screen and (max-width: 868px) {
			width: 100%;
			justify-content: center;
			font-size: clamp(1.1rem, 2vw, 1.9rem);
		}
	}

	/* LEFT SIDE STRIP */
	.button-with-side {
		padding: 1rem 2rem 1rem 3rem;
	}

	.side {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 1.6rem;
		border-radius: 16px 0 0 16px;

		/* STRIP KONTRAS */
		background-color: #000000;

		@media screen and (max-width: 868px) {
			display: none;
		}
	}
</style>
