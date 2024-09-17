<script>
  import { slide } from "svelte/transition";
  import { themes } from "$lib/Components/ThemeWrapper/themes.svelte";
  import { getAppContext } from "$lib/app.svelte";

  let { color = $bindable() } = $props();

  const app = getAppContext();
  let currentTheme = $derived(themes.find((t) => t.name === app.themeName));

  let colorOptions = $derived(currentTheme ? [
    currentTheme.theme1,
    currentTheme.theme2,
    currentTheme.theme3,
    currentTheme.theme4,
    currentTheme.theme5,
  ] : []);

  let showPicker = $state(false);
</script>

<div class="color-picker-container">
  <!-- radio buttons that bind the value to color -->
  <button
    class="current-color"
    style="background-color: {color}"
    onclick={() => (showPicker = !showPicker)}
  >
  </button>
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
    border:2px solid var(--bg);
    border-radius: 100%;
    width: 1.5em;
    height: 1.5em;
    appearance: none;
    cursor: pointer;
  }
</style>
