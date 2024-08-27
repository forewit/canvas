<script lang="ts">
  import "quill/dist/quill.core.css";
  import "./styles/quill.css";
  import type Quill from "quill/core";
  import type { Delta } from "quill/core";
  import { getAppContext } from "$lib/app.svelte";
  import { saveContent, loadContent, type EditorContent } from "./utils/editorContent";
  import { detectAndformatLinks } from "./utils/linkFormatting";
  import { bindKeyboardShortcuts } from "./utils/keyboardShortcuts";
  import { onDestroy, onMount } from "svelte";


  const { data = $bindable() }: { data: EditorContent } = $props();

  const app = getAppContext();

  let quill: Quill | undefined = $state();
  let quillElm: HTMLElement;

  function quillInput(newDelta: Delta, oldDelta: Delta, source: string) {
    if (source === "user" && quill) {
      detectAndformatLinks(quill);
      saveContent(quill);
    }
  }

  // load user content reactively
  $effect(() => {
    if (quill && data) {
      loadContent(quill, data);
    }
  });

  // update user settings reactively
  $effect(() => {
    if (quill) {
      quill.root.setAttribute("spellcheck", app.spellcheck.toString());
    }
  });

  // load the quill editor
  onMount(async () => {
    const { default: Quill } = await import("quill");

    quill = new Quill(quillElm, {
      formats: [
        "size",
        "align",
        "indent",
        "list",
        "bold",
        "italic",
        "underline",
        "strike",
        "code",
        "link",
      ],
      placeholder: "Enter text here",
    });

    bindKeyboardShortcuts(quill);
    quill.on("text-change", quillInput);
  });

  onDestroy(() => {
    quill?.off("text-change", quillInput);
  });
</script>

<div class="quill-editor-container">
  <div class="quill-editor" bind:this={quillElm}></div>
</div>

<style>
  .quill-editor-container {
    background-color: var(--bg);
    height: 100%;
  }
</style>
