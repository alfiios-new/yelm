<script>
	import Social from '../atoms/Social.svelte';
	import { TwitterIcon } from '@indaco/svelte-iconoir/twitter';
	import { TelegramIcon } from '@indaco/svelte-iconoir/telegram';
</script>

<div class="socials-container">
	<!-- Twitter -->
	<Social tip="Twitter" link="https://x.com/yelmremergent">
		<svg
			width="22"
			height="22"
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			class="icon"
		>
			<path
				d="M18.244 2H21.5l-7.78 9.02L23 22h-7.406l-5.8-7.29L3.6 22H.333l8.327-9.67L1 2h7.594l5.243 6.63L18.244 2zM16.848 20.1h2.227L7.25 3.8H5.024l11.824 16.3z"
			/>
		</svg>
	</Social>

	<!-- Telegram -->
	<Social tip="Telegram" link="">
		<svg
			width="22"
			height="22"
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			class="icon"
		>
			<path d="M21.5 3.5L2.5 10.8c-.9.3-.9 1.5 0 1.8l4.8 1.6 1.9 5.6c.3.9 1.5.9 1.9 0l2.9-4.6 4.9 3.6c.8.6 1.9.1 2.1-.9l2.5-14c.2-.9-.7-1.6-1.6-1.3z"/>
		</svg>
	</Social>

	<!-- Pumpfun / Dexscreener -->
	<Social tip="$yelmr" link="">
		<img src="/dexscreener.svg" alt="$yelmr" class="icon icon-img" />
	</Social>
</div>

<style>
	.socials-container {
		display: flex;
		flex-direction: row;
		gap: 0.75rem;
		align-items: center;
	}

	/* SVG ICON → HITAM */
	.icon {
		width: 22px;
		height: 22px;
		color: #000000;
		fill: #000000;
		transition: transform 0.2s ease;
	}

	/* IMAGE ICON (Dexscreener/Pumpfun) → HITAM */
	.icon-img {
		filter: brightness(0);
	}

	.icon:hover,
	.icon-img:hover {
		transform: scale(1.05);
	}
</style>
