<script lang="ts">
  import "./UIVariables.css";
  import "./UIGlobal.css";
  import { themes } from "./utils/themes";
  import { updateSafeAreasOnOrientationChange } from "./utils/updateSafeAreas";
  import { themeName } from "$lib/state/userSettings.svelte";
  import {onMount, untrack, type Snippet } from 'svelte';

  let { children }: { children: Snippet } = $props();

  let theme = $derived(themes.find((t) => t.name === themeName));

  $effect(() => {
    const root = untrack(() => document.documentElement);
    if (theme) {
      root.style.setProperty("--bg", theme.bg);
      root.style.setProperty("--bg-alt", theme.bgAlt);
    root.style.setProperty("--main", theme.main);
    root.style.setProperty("--card", theme.card);
    root.style.setProperty("--error", theme.error);
    root.style.setProperty("--sub", theme.sub);
    root.style.setProperty("--text", theme.text);
    }
  });

    onMount(() => {
    updateSafeAreasOnOrientationChange();
  })
</script>

<svelte:head>
  <meta name="theme-color" content="var(--bg)" />
</svelte:head>

{@render children()}