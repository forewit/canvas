<script>
  import { slide } from "svelte/transition";

  let { color = $bindable() } = $props();

  let colorOptions = ["red", "orange", "yellow", "green", "blue", "purple"];

  let showPicker = $state(false);
</script>

<div class="color-picker-container">
  <!-- radio buttons that bind the value to color -->
  <button class="current-color" style="background-color: {color}" onclick={() => (showPicker = !showPicker)}> </button>
  {#if showPicker}
    <div class="color-picker" transition:slide={{ duration: 200, axis: "x" }}>
      {#each colorOptions as option}
        <label>
          <input
            type="radio"
            bind:group={color}
            value={option}
            class:selected={color === option}
            style="background-color: {option}"
            onclick={() => (showPicker = false)}
          />
        </label>
      {/each}
    </div>
  {/if}
</div>

<style>
    .color-picker-container {
      display: flex;
      gap: 0.5em;
      align-items: center;
    }

  .current-color {
    width: 2em;
    height: 2em;
    border-radius: 100vh;
    border: none;
    cursor: pointer;
    border: 4px solid var(--bg);
  }
  .color-picker {
    display: flex;
    gap: 0.2em;
    overflow: hidden;
  }

  input {
    border: 4px solid var(--bg-alt);
    border-radius: 100%;
    width: 1.5em;
    height: 1.5em;
    appearance: none;
    cursor: pointer;
  }
  .selected {
    border: 4px solid var(--bg);
  }
</style>
