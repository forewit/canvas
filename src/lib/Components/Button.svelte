<script lang="ts">
  import { type Snippet } from "svelte";

  let { children, onclick }: { children: Snippet; onclick?: () => void } =
    $props();
</script>

<button {onclick}>
  {@render children()}
</button>

<style>
  button {
    outline-color: var(--main);
    background-color: var(--bg-alt);
    color: var(--text);
    padding: var(--m);
    border-radius: var(--s);
    border: none;
  }
  button:active {
    background-color: var(--main);
    color: var(--bg);
  }
</style>
