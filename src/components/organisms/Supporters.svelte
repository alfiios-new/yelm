<script lang="ts">
	import supporters from '../../util/supporters.json'
</script>

<section class="wrapper">
	<div class="title">
		<h3>Developed by</h3>
		<p></p>
	</div>

	<div class="supporters">
		{#each supporters as { name, icon, message, url }}
			<div class="supporter">
				<a href={url} target="_blank" rel="noopener noreferrer">
					<img src={icon} alt={name} />
				</a>
				<h6>{name}</h6>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	.title {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 0;
		margin-bottom: 1.5rem;

		@media (max-width: 868px) {
			align-items: normal;
		}
	}

	.supporter {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	.supporters {
		justify-content: center;
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		margin-bottom: 3rem;

		@media (max-width: 868px) {
			justify-content: left;
		}
	}

	img {
		border-radius: 50%;
		height: 64px;
		width: 64px;
		cursor: pointer;
		transition: transform 0.15s ease;
	}

	img:hover {
		transform: scale(1.08);
	}
</style>
