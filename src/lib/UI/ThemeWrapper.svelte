<script lang="ts">
  import "./styles/normalize.css";
  import "./styles/reset.css";
  import "./styles/UIVariables.css";
  import "./styles/UIGlobal.css";
  import "./styles/UIClasses.css";
  import { themes } from "./utils/themes";
  import { updateSafeAreas } from "./utils/updateSafeAreas";
  import { userState } from "$lib/State/userState.svelte";
  import { untrack, type Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();

  let theme = $derived(themes.find((t) => t.name === userState.themeName));

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

  $effect(() => {
    screen.orientation.addEventListener("change", updateSafeAreas);
    return () =>
      screen.orientation.removeEventListener("change", updateSafeAreas);
  });
</script>

<svelte:head>
  {#if theme}
    <meta name="theme-color" content={theme.bg} />
  {/if}
</svelte:head>

{@render children()}