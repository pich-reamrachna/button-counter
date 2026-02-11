<script lang="ts">
  import { onMount } from "svelte";
  import RandomBtn from "./randombtn.svelte";

  let count = 0;
  // read data from +server.ts
  onMount(async function load() {
    const res = await fetch("/api/");
    const data = await res.json();
    count = data.count;
  });

  // Call API to increment count
  async function increment() {
    const res = await fetch("/api/", {
      method: "POST",
    });

    const data = await res.json();
    count = data.count;
  }
</script>

<div class="button-wrapper">
  <p>Count is {count}</p>
  <RandomBtn clickHandler={increment} />
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
