<script lang="ts">
  import "./UIGlobal.css"
  import "./UIVariables.css";
  import { themes } from "./Utils/themes";
  import { updateSafeAreasOnOrientationChange } from "./Utils/updateSafeAreas";
  import { userSettingsStore } from "$lib/stores/userSettingsStore";
  import { onDestroy, onMount } from "svelte";

  let css = "";
  let bgColor = "";

  function updateTheme(themeName: string) {
    const theme = themes.find((t) => t.name === themeName);
    if (!theme) return;

    bgColor = theme.bg;
    css = `<style>
      :root {
      --bg: ${theme.bg};
      --bg-alt: ${theme.bgAlt};F
      --main: ${theme.main};
      --card: ${theme.card};
      --error: ${theme.error};
      --sub: ${theme.sub};
      --text: ${theme.text};
      }
      </style>`;
  }

  updateTheme($userSettingsStore.theme);
  const unsubscribe = userSettingsStore.subscribe((settings) => {
    updateTheme(settings.theme);
  });

  onMount(() => {
    updateSafeAreasOnOrientationChange();
  })
  onDestroy(unsubscribe);
</script>

<svelte:head>
  <meta name="theme-color" content={bgColor} />
</svelte:head>

{@html css}

<slot />
