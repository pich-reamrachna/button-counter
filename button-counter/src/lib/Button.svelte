<script lang="ts">
    import { onMount } from "svelte";

	let count = 0;
	let label = "Click me";

	// read data from +server.ts
    onMount(async function load(){
		try {
			const res = await fetch("/api/") // fetch sends a GET request (GET http://localhost:5173/api/)
			
			if (!res.ok) throw new Error("API failed"); // res.ok is a boolean built into the Fetch API (Status Code 200 => OK)

			const data = await res.json(); // parses JSON as a JS object
			count = data.count; // assigning the value of key "count" to count variable

		} catch (err) {
			console.error(err); 
		}
	});
	
	// Call API to increment count
	async function increment() {
		try {
			const res = await fetch("/api/", {
			method: "POST"
			});
			
			if (!res.ok) throw new Error("Increment Failed");

			const data = await res.json();
			count = data.count;

		} catch (err) {
			console.error(err);
		}
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
