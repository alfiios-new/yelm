<script>
	import ArtGrid from '../../components/molecules/ArtGrid.svelte';
	import Tooltip from '../atoms/Tooltip.svelte';
</script>

<section>
	<div class="wrapper" id="aw">
		<Tooltip tip="Click on an artwork">
			<h2><span>art</span></h2>
		</Tooltip>
	</div>
	<ArtGrid />
</section>

<style lang="scss">

	/* ———————————————————————
	   TITLE "art" → HITAM
	   ——————————————————————— */
	h2 span {
		color: #000000 !important;
	}

	h2 {
		display: inline-block;
		margin-bottom: 1rem;
	}

	div {
		display: flex;
		justify-content: center; /* Desktop center */
		margin-top: 0;

		@media (max-width: 868px) {
			justify-content: flex-start; /* Mobile kiri */
			margin-bottom: 0.3rem;
		}
	}
</style>
