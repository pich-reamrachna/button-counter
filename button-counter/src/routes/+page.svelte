
<div class="counter-container">
	<h1>Counter</h1>
	<p class="count-value">{count}</p>
	<button onclick={increment}>
		+1
	</button>
</div>

<!-- Temp css -->
<style>
	.counter-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		font-family: sans-serif;
	}

	.count-value {
		font-size: 3rem;
		font-weight: bold;
	}

	button {
		padding: 10px 20px;
		font-size: 1.2rem;
		cursor: pointer;
		background-color: #ff3e00;
		color: white;
		border: none;
		border-radius: 4px;
	}

</style>

<!-- Temp script -->
<script>
	let count = $state(0);

	function increment() {
		count += 1;
	}
</script>