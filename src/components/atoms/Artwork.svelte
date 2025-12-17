<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut, quintOut } from 'svelte/easing';
	
	export let name = '';
	export let tall = false;
	export let position = "center";
	export let commission = false;
	export let subtitle = 'Click anywhere to dismiss';

	let clicked = false;

	function onKeyDown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			clicked = false;
		}
	}

	function disableRightClick(event: { preventDefault: () => void }) {
		if (commission) {
			event.preventDefault();
		}
	}
</script>

<button
	class="card"
	class:tall
	style="background-position: {position}; background-image:url(art/{name}.webp);"
	aria-label={name}
	on:click={() => (clicked = true)}
	on:keypress={() => (clicked = true)}
/>

<svelte:window on:keydown={onKeyDown} />

<svelte:head>
	{#if clicked}
		<title>yelmr{name}</title>
	{:else}
		<title> Yet Emergent Liminal Memory Root</title>
	{/if}
</svelte:head>

{#if clicked === true}
	<div
		class="img-modal"
		tabindex="0"
		on:click={() => (clicked = false)}
		on:keypress={() => (clicked = false)}
		on:contextmenu={disableRightClick}
		role="button"
		in:fly={{ y: 50, easing: quintOut, duration: 750 }}
		out:fly={{ y: 50, easing: cubicOut, duration: 300 }}
	>
		<h3>{name}</h3>
		<img src="art/{name}.webp" alt={name} />
		<h6 class="subtitle">{subtitle}</h6>
	</div>
{/if}

<style lang="scss">
	.card {
		position: relative;
		border: none;
		padding: none;
		height: 100%;
		width: 100%;
		border-radius: 4px;
		overflow: hidden;
		background: var(--elevation-one);
		transition: all 0.3s var(--bezier-one);
		cursor: pointer;
		font-size: 0;
		user-select: none;
		background-size: cover;
		background-repeat: no-repeat;
		-webkit-transform: translate3d(0, 0, 1px);
		transform: translate3d(0, 0, 1px);
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;

		&:hover {
			transform: translateY(-1px);
			box-shadow: 0px 15px 25px -10px rgba(0, 0, 0, 0.25);
		}

		@media screen and (max-width: 868px) {
			border-radius: 0;
		}
	}

	.img-modal {
		background-blend-mode: overlay;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: fixed;
		text-align: center;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		height: 200vh;
		width: 100vw;
		z-index: 20;
		cursor: pointer;
		user-select: none;
		background-color: var(--elevation-six);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);

		img {
			max-height: 83vh;
			height: auto;
			max-width: 86vw;
			border-radius: 2vh;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	h3 {
		margin: 1vh;
		font-size: 3.5vh;
		font-weight: 500;
		color: var(--text-primary);
	}

	.subtitle {
		margin: 1vh;
		margin-top: 2vh;
		max-width: 80vw;
		font-size: 1.4vh;
		line-height: 1.4;
		font-weight: 300;
		text-align: center;

		color: rgba(255, 255, 255, 0.9);
		background: rgba(0, 0, 0, 0.35);
		padding: 1.2vh 2vh;
		border-radius: 8px;

		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);

		/* kalau mau dibatasi jumlah baris, aktifkan ini:
		display: -webkit-box;
		-webkit-line-clamp: 5;
		-webkit-box-orient: vertical;
		overflow: hidden;
		*/
	}

	.tall {
		grid-row: span 2 / auto;
	}
</style>
