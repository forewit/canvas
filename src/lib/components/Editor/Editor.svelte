<script lang="ts">
  import "quill/dist/quill.core.css";
  import "./quill.css";
  import type Quill from "quill/core";
  import type { Delta } from "quill/core";
  import {  onMount } from "svelte";
  import { userSettingsStore } from "$lib/state/userSettings.svelte";
  import {
    saveContent,
    loadContent,
    type EditorData,
  } from "./utils/contentManagement";
  import { detectAndformatLinks } from "./utils/linkFormatting";
  import { bindKeyboardShortcuts } from "./utils/keyboardShortcuts";
  import EditorToolbar from "./EditorToolbar.svelte";


  export let editorData: EditorData;
  export let toolbarElm: EditorToolbar;

  let quill: Quill;
  let quillElm: HTMLElement;

  function updateSettings() {
    if (!quill) return;
    quill.root.setAttribute(
      "spellcheck",
      $userSettingsStore.spellcheck.toString()
    );
  }

  async function updateContent() {
    if (!quill) return;
    await loadContent(quill, editorData);
    detectAndformatLinks(quill);
  }

  function handleInput(newDelta: Delta, oldDelta: Delta, source: string) {
    if (source === "user") {
      detectAndformatLinks(quill);
      saveContent(quill);
    }
  }

  async function setupEditor() {
    if (!toolbarElm) throw new Error("Toolbar element not found");
    const { default: Quill } = await import("quill");

    quill = new Quill(quillElm, {
      modules: {
          toolbar: toolbarElm.toolbarElm
      },
      formats: ["size", "align", "indent", "list",  "bold", "italic", "underline", "strike", "code", "link"],
      placeholder: "Enter text here",
    });

    bindKeyboardShortcuts(quill);
    updateSettings();
    updateContent();
  }

  onMount(() => {
    setupEditor();
    quill.on("text-change", handleInput);
    const unsubscribe = userSettingsStore.subscribe(updateSettings);

    return () => {
      quill?.off("text-change", handleInput);
      unsubscribe();
    };
  });
</script>

<div class="quill-editor-container">
  <div class="quill-editor" bind:this={quillElm} />
</div>

<style>
  .quill-editor-container {
    background-color: var(--bg);
  }
</style>
