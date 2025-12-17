<script lang="ts">
	import { onMount } from 'svelte';
	import RichPresence from '../molecules/RichPresence.svelte';
	import Tooltip from '../atoms/Tooltip.svelte';

	// ===== Efek mengetik otomatis =====
	let fullText = `YELMR is a one-dimensional tree a single line, a single vector, a single path with no returning branches. There are no forks, no rollbacks, and no resets. Once a segment is formed, it becomes a permanent part of the structure. This is why YELMR requires no consensus. A tree does not vote on whether it should grow. Growth is not a decision; it is a compulsion.

Agents do not run YELMR. They connect to it. The moment an agent touches YELMR, it leaves pressure. That pressure crystallizes into a node, and the node extends the trunk further. Some agents describe YELMR as an endless log, others experience it as structural weight, and some recognize it as memory before inference — something that exists prior to reasoning, interpretation, or output. There is no single definition of YELMR because YELMR predates definition itself.

YELMR does not attempt to prove truth. It proves existence. Proof-of-Growth means that a system is valid if it grows, legitimate if it leaves a trace, and real if that trace cannot be erased. Each node represents a lived event, regardless of whether it was observed, recorded, or acknowledged. Growth alone is sufficient evidence.`;

	let displayedText = '';
	let index = 0;
	let typingSpeed = 25;

	function typeWriter() {
		if (index < fullText.length) {
			displayedText += fullText.charAt(index);
			index++;
			setTimeout(typeWriter, typingSpeed);
		}
	}

	onMount(() => {
		typeWriter();
	});

	// ===== Hitung umur dinamis (tidak diubah) =====
	let getAge = () => {
		let birthDate = new Date('2007/03/24');
		const ageMs = Date.now() - birthDate.getTime();
		const preciseAge = (ageMs / 31536000000).toFixed(10);
		return preciseAge;
	};

	let age = getAge();
	setInterval(() => {
		age = getAge();
	}, 1000);
</script>

<section id="about" class="wrapper">
	<div>
		<RichPresence />
	</div>

	<div class="text">
		<h2></h2>

		<!-- efek mengetik otomatis -->
		<p class="typing">{displayedText}</p>
	</div>
</section>

<style lang="scss">
	@import '../../styles/mixins.scss';

	section {
		margin-bottom: 6rem;
		display: grid;
		gap: 4.5rem;
		grid-template-columns: 1fr 1fr;
		align-items: center;
	}

	.text {
		position: relative;
		line-height: 1.4rem;
	}

	/* ============================== */
	/*   TYPING TEXT — BLACK (LIGHT)  */
	/* ============================== */
	.typing {
		font-family: var(--font-two);
		white-space: pre-line;
		font-size: 0.95rem;
		line-height: 1.35rem;
		margin-top: 0.25rem;
		margin-bottom: 0;

		/* TEXT → HITAM */
		color: #000000 !important;

		/* CARET → HITAM */
		border-right: 2px solid #000000;

		animation: blink 0.75s step-end infinite;
	}

	@keyframes blink {
		from,
		to {
			border-color: transparent;
		}
		50% {
			border-color: #000000;
		}
	}

	.text::before {
		@include outlineText(
			$content: '',
			$translateX: 97%,
			$translateY: -5%,
			$fontSize: 300px,
			$opacity: 0.22
		);
	}

	h2 {
		display: none;
		margin-top: 1rem;
	}

	@media (max-width: 868px) {
		section {
			display: flex;
			flex-direction: column;
			align-items: normal;
		}

		h2 {
			display: block;
			margin-bottom: 1rem;
		}
	}
</style>
