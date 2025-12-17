<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let href = '#';
	export let section = 'home';
	export let isSelected: boolean;

	$: currentPage = $page.url.pathname;

	async function handleClick() {
		if (href.startsWith('/')) {
			await goto(href);
			return;
		}

		if (currentPage === '/') {
			const el = document.querySelector(href);
			if (el) el.scrollIntoView({ behavior: 'smooth' });
		} else {
			window.location.href = `/${href}`;
		}
	}
</script>

<li class:selected={isSelected}>
	<button on:click={handleClick}>
		<div class="icon-container">
			<slot />
		</div>
		<h5>{section}</h5>
	</button>
</li>

<style lang="scss">
li {
	list-style: none;
}

/* ===== DESKTOP / DEFAULT ===== */
button {
	background: transparent;
	border: none;
	display: flex;
	align-items: center;
	gap: 0.4rem;

	/* 🔽 DIPERKECIL */
	padding: 0.35rem 0.7rem;
	border-radius: 999px;

	cursor: pointer;
	transition: background 0.15s ease;
}

button:hover {
	background: rgba(0, 0, 0, 0.04);
}

.icon-container {
	display: none;
}

h5 {
	margin: 0;
	font-weight: 400;
	font-size: 0.85rem;
	opacity: 0.85;
	line-height: 1;
	color: #222222;
}

/* SELECTED STATE */
.selected button {
	background: #ffffff;
	border: 1px solid #111111;
}

.selected h5 {
	font-weight: 600;
	opacity: 1;
}

/* ===== MOBILE ===== */
@media (max-width: 868px) {
	button {
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
		padding: 0.35rem 0.5rem;
	}

	h5 {
		font-size: 0.65rem;
	}

	.icon-container {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.35rem;
		border-radius: 999px;
	}

	.selected .icon-container {
		background: rgba(0, 0, 0, 0.08);
	}
}
</style>
