<script>
	let { label = '+1' } = $props();
	let count = $state(0);

	function increment() {
		count += 1;
	}
</script>

<div class="button-wrapper">
	<p>Count is {count}</p>
	<button onclick={increment}>
		{label}
	</button>
</div>

<style>
	.button-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		padding: 2rem;
		border: 1px solid #ccc;
		border-radius: 8px;
		background: #f9f9f9;
		color: #333;
	}

	button {
		padding: 10px 20px;
		font-size: 1.2rem;
		cursor: pointer;
		background-color: #ff3e00;
		color: white;
		border: none;
		border-radius: 4px;
		transition: background-color 0.2s;
	}

	button:hover {
		background-color: #e63900;
	}
</style>
