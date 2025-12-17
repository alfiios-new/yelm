<script lang="ts">
	import Nav from '../atoms/Nav.svelte';
	import { page } from '$app/stores';

	let y: number;
	$: currentPath = $page.url.pathname;
</script>

<nav>
	<div class="nav-wrapper" class:scrolled={y > 20}>
		<ul>
			<Nav href="#home" section="/" isSelected={currentPath === '/' && y < 350}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path fill="none" d="M0 0h24v24H0z" />
					<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
				</svg>
			</Nav>

			<Nav href="#about" section="about" isSelected={currentPath === '/' && y > 350 && y < 675}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path fill="none" d="M0 0h24v24H0z" />
					<path
						d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
						10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
					/>
				</svg>
			</Nav>

			<Nav href="#aw" section="art" isSelected={currentPath === '/' && y > 675 && y < 1000}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path fill="none" d="M0 0h24v24H0z" />
					<path
						d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2
						.89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2
						19c0 1.11.89 2 2 2h16c1.11 0 2-.89
						2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
					/>
				</svg>
			</Nav>

			<!-- BACKROOMS DISABLED / HIDDEN -->
			<!--
			<Nav href="/backrooms" section="backrooms" isSelected={currentPath === '/backrooms'}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path fill="none" d="M0 0h24v24H0z" />
					<path
						d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2
						2H4a2 2 0 01-2-2V6a2 2 0 012-2zm4
						3h8v2H8V7zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"
					/>
				</svg>
			</Nav>
			-->
		</ul>
	</div>
</nav>

<svelte:window bind:scrollY={y} />

<style lang="scss">
	/* ICON FOLLOWS TEXT COLOR */
	nav svg {
		width: 24px;
		height: 24px;
		fill: currentColor;
		stroke: currentColor;
	}

	/* NAV BASE */
	nav {
		position: fixed;
		left: 0;
		width: 100%;
		z-index: 50;
		display: flex;
		justify-content: center;
		background: transparent;
		pointer-events: none;
	}

	.nav-wrapper {
		width: 100%;
		padding: 1rem 0;
		display: flex;
		justify-content: center;
		pointer-events: auto;

		ul {
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			gap: 1.2rem;
			margin: 0;
			padding: 0;
			width: 100%;
			max-width: 600px;
		}
	}

	/* SCROLLED STATE — SOFT GRAY */
	.scrolled {
		background: rgba(245, 245, 245, 0.95);
		border: 1px solid #e0e0e0;
	}

	/* DESKTOP */
	@media (min-width: 868px) {
		nav {
			top: 1rem;
		}

		.nav-wrapper {
			width: auto;
			border-radius: 14px;
			padding: 0.75rem 1.25rem;
			background: rgba(245, 245, 245, 0.95);
			border: 1px solid #e0e0e0;
		}

		nav button {
			color: #222222 !important;
		}
	}

	/* MOBILE */
	@media (max-width: 868px) {
		nav {
			bottom: 0;
			top: auto;
		}

		.nav-wrapper {
			padding: 0.5rem 0;
			background: rgba(245, 245, 245, 0.98);
			border-top: 1px solid #e0e0e0;
		}

		nav button {
			color: #222222 !important;
		}
	}
</style>
