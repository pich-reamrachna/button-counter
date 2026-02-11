<script>
  export let label = "Click Me!";
  export let clickHandler = () => {};

  let top = "50%";
  let left = "50%";

  function randomizePosition() {
    const randomTop = Math.floor(Math.random() * 80) + 10;
    const randomLeft = Math.floor(Math.random() * 80) + 10;

    top = randomTop + "%";
    left = randomLeft + "%";

    if (clickHandler) clickHandler();
  }
</script>

<div class="container">
  <button onclick={randomizePosition} style="top: {top}; left: {left};">
    {label}
  </button>
</div>

<style>
  button {
    position: fixed;
    z-index: 9999;
    padding: 10px 20px;
    font-size: 1.2rem;
    cursor: pointer;
    background-color: #ff3e00;
    color: white;
    border: none;
    border-radius: 4px;
    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
    transform: translate(-50%, -50%);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  button:hover {
    background-color: #e63900;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }
</style>
