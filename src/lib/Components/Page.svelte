<script lang="ts">
    import { type Page } from "$lib/pages.svelte";

    type props = {
        page: Page
        onclick?: () => void
    }

    let { page, onclick }: props = $props();
</script>

<button class="page" {onclick}>
{page.title}
</button>

<style>
 button {
    text-align: start;
    background-color: var(--bg-alt);
    color: var(--text);
    padding: var(--m);
    border-radius: var(--s);
    border: none;
    outline: none;
  }

  button:focus-visible {
    outline: var(--main) dashed var(--xs);
    outline-offset: calc(-1 * var(--xs));
  }

  button:active {
    background-color: var(--main);
    color: var(--bg);
  }
</style>