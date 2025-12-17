<script>
	import Tooltip from '../atoms/Tooltip.svelte';
	import Socials from './Socials.svelte';
</script>

<hr />

<footer class="wrapper footer">
	<div class="footer-left"></div>

	<div class="footer-center">
		<Socials />
	</div>

	<h6 class="footer-right">
		<Tooltip tip="how to delete">
			<a href="" target="_blank" rel="noreferrer"></a>
		</Tooltip>
	</h6>
</footer>

<style lang="scss">
	hr {
		background-color: var(--elevation-one);
		height: 1px;
		border: 0;
		width: 100%;
		margin: 2rem 0;

		@media screen and (max-width: 768px) {
			margin: 1.5rem 0;
		}
	}

	footer.wrapper.footer {
		display: grid;
		grid-template-columns: 1fr auto 1fr; /* kiri - tengah - kanan */
		align-items: center;
		padding: 1rem 0 2.5rem;
		color: var(--text-secondary);
		font-family: var(--font-two);
		font-size: 0.9rem;
		width: 100%;
	}

	.footer-left {
		/* kosong, cuma buat balance */
	}

	.footer-center {
		display: flex;
		justify-content: center; /* social pas di tengah */
	}

	.footer-right {
		margin: 0;
		line-height: 1.8rem;
		color: var(--text-secondary);
		font-weight: 400;
		justify-self: end; /* teks tetap di kanan */

		a {
			margin-left: 0.4rem;
			text-decoration: none;
			color: var(--accent);
			transition: color 0.3s ease;

			&:hover {
				color: var(--text-primary);
			}
		}
	}

	/* mobile tetap vertikal seperti punyamu */
	@media (max-width: 768px) {
		footer.wrapper.footer {
			display: flex;
			flex-direction: column;
			gap: 0.8rem;
			padding-bottom: 5rem;
			text-align: center;
		}

		.footer-right {
			justify-self: unset;
		}
	}

	:global(.socials-container) {
		display: flex;
		gap: 1rem;

		@media (max-width: 768px) {
			gap: 0.75rem;

			svg {
				width: 20px;
				height: 20px;
			}
		}
	}
</style>
