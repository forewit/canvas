<script lang="ts">
  import "./normalize.css";
  import "./reset.css";
  import "./theme.css";
  import { getAppContext } from "$lib/app.svelte";
  import { themes, applyTheme } from "$lib/Components/ThemeWrapper/themes.svelte";
  import { onMount, type Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();

  const app = getAppContext();

  function updateSafeAreas() {
    if (!screen)
      throw new Error("Cannot update safe areas: screen is not defined");

    const root = document.documentElement;
    switch (screen.orientation.type) {
      case "portrait-primary":
        root.style.setProperty("--safe-area-top", "env(safe-area-inset-top)");
        root.style.setProperty("--safe-area-left", "0px");
        root.style.setProperty("--safe-area-right", "0px");
        break;
      case "landscape-primary":
        root.style.setProperty("--safe-area-top", "0px");
        root.style.setProperty("--safe-area-left", "env(safe-area-inset-left)");
        root.style.setProperty("--safe-area-right", "0px");
        break;
      case "landscape-secondary":
        root.style.setProperty("--safe-area-top", "0px");
        root.style.setProperty("--safe-area-left", "0px");
        root.style.setProperty(
          "--safe-area-right",
          "env(safe-area-inset-right)"
        );
        break;
    }
  }

  $effect.pre(() => {
    if (app.theme) {
      const root = document.documentElement
        applyTheme(root, app.theme);
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", app.theme.bg);
    }
  });

  onMount(() => {
    screen.orientation.addEventListener("change", updateSafeAreas);
    return () => {
      screen.orientation.removeEventListener("change", updateSafeAreas);
    };
  });
</script>

<svelte:head>
  <meta
    name="viewport"
    content="width=device-width, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover"
  />
  <meta name="theme-color" content="var(--bg)" />
</svelte:head>
{@render children()}