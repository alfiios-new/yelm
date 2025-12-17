<div class="img-container">
	<div class="img" role="img" aria-label="Leafinite world tree illustration"></div>
</div>

<style lang="scss">
	@keyframes float {
		0% {
			transform: translateY(7px);
		}
		50% {
			transform: translateY(-7px);
		}
		100% {
			transform: translateY(7px);
		}
	}

	.img {
		border-radius: 48px;
		width: 425px;
		height: 400px;
		z-index: 1;
		display: block;
		align-self: start;
		transition:
			width 0.4s var(--bezier-one),
			transform 0.4s var(--bezier-one);

		/* transparan, ikut background */
		background-color: transparent;
		background-image: url('/art/afn.png');
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;

		/* TABLET / DESKTOP */
		@media (max-width: 1240px) {
			width: clamp(340px, 40vw, 425px);
			height: clamp(300px, 40vw, 400px);
		}

		/* MOBILE – jangan di-hide, cuma dikecilkan */
		@media (max-width: 768px) {
			width: min(70vw, 320px);
			height: min(70vw, 320px);
			margin: 2rem auto 0;
		}
	}

	.img-container {
		z-index: 1;
		animation: float 6s ease-in-out infinite;
		animation-play-state: running;

		@media (max-width: 1240px) {
			display: flex;
			justify-content: center;
		}
	}
</style>
