<script lang="ts">
  import { onMount } from "svelte";
  import RandomBtn from "./randombtn.svelte";

	let count = 0;
	let isLoading = true 

	// read data from +server.ts
    onMount(async function load(){
		try {
			const res = await fetch("/api/") // fetch sends a GET request (GET http://localhost:5173/api/)
			
			if (!res.ok) throw new Error("API failed"); // res.ok is a boolean built into the Fetch API (Status Code 200 => OK)

			const data = await res.json(); // parses JSON as a JS object
			count = data.count; // assigning the value of key "count" to count variable

		} catch (err) {
			console.error(err); 
		} finally {
			isLoading = false // disable spinner after finishing request
		}

	});
	
	// Call API to increment count
	async function increment() {
    const previousCount = count;
    
    // optimistic UI
    count = count + 1;
		isLoading = true // change loading to true while making request to display spinner

		try {
			const res = await fetch("/api/", {
			method: "POST"
			});
			
			if (!res.ok) throw new Error("Increment Failed");

			const data = await res.json();
			count = data.count;

		} catch (err) {
      // rollback if req fails
      count = previousCount;
			console.error(err);
		} finally {
			isLoading = false
		}
	}
	
</script>

<div class="button-wrapper">
	{#if isLoading && count == 0}
		<p>Loading...</p>
	{:else}
		  <p>Count is {count}</p>
	{/if}
  <RandomBtn clickHandler={increment} isLoading= {isLoading}/>
</div>

<style>
  .button-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    color: #333;
  }
</style>
