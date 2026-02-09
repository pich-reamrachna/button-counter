<script lang="ts">
  let count: number = 0;
  let errorMessage: string = '';

  async function increment() {
    // 1. Reset error message at the start of a new attempt
    errorMessage = ''; 

    try {
      const response = await fetch('/api/increment', {
        method: 'POST'
      });

      if (!response.ok) {
        throw new Error('Failed to call API');
      }

      const data = await response.json();
      // 2. Update the local state with the returned count
      count = data.count; 
    } catch (err) {
      // 3. Use 'err' to avoid confusion with the variable name
      errorMessage = 'Error incrementing count';
      console.error(err);
    }
  }
</script>

<h1>Button Counter</h1>

<p>Count: {count}</p>

<button on:click={increment}>
  Increment
</button>

{#if errorMessage}
  <p style="color:red;">{errorMessage}</p>
{/if}



