<script lang="ts">
  import "./styles/normalize.css";
  import "./styles/reset.css"
  import "./styles/UIVariables.css";
  import "./styles/UIGlobal.css";
  import "./styles/UIClasses.css"
  import { themes } from "./utils/themes";
  import { updateSafeAreas } from "./utils/updateSafeAreas";
  import { getUserState } from "$lib/State/userState.svelte";
  import { untrack, type Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();

  const userState = getUserState();

  let theme = $derived(themes.find((t) => t.name === userState.settings.themeName));

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
    return () => screen.orientation.removeEventListener("change", updateSafeAreas);
  });
</script>

<svelte:head>
  <meta name="theme-color" content="var(--bg)" />
</svelte:head>

{@render children()}