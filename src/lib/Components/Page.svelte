<script lang="ts">
  import { type Page } from "$lib/pages.svelte";
  import { getRelativeTimeString } from "$lib/utils/time";
  import { getDirectoryContext } from "$lib/directories.svelte";

  type props = {
    page: Page;
    onclick?: () => void;
  };

  let { page, onclick }: props = $props();

  const directory = getDirectoryContext();

  let relativeTimeString = $state(getRelativeTimeString(page.lastUpdated));
  $effect(() => {
    if (directory.currentFolder.pages && directory.currentFolder.pages.length > 0) {
      relativeTimeString = getRelativeTimeString(page.lastUpdated);
    }
  });
</script>

<button class="page" {onclick}>
  <p class="title">{page.title}</p>
  <p class="last-updated">{relativeTimeString}</p>
</button>

<style>
  button {
    text-align: start;
    background-color: var(--bg);
    color: var(--text);
    padding-block: var(--m);
    padding-right: var(--xl);
    padding-left: var(--l);
    border-radius: var(--s);
    border: none;
    outline: none;
    display: grid;
    align-items: center;
    grid-auto-flow: column;
  }

  button:focus-visible {
    outline: var(--main) dashed var(--xs);
    outline-offset: calc(-1 * var(--xs));
  }

  button:active {
    background-color: var(--main);
    color: var(--bg);
  }

  .last-updated {
    justify-self: right;
    opacity: 0.5;
  }
</style>
