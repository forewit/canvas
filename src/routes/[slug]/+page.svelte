<script lang="ts">
  import { pagesState } from "$lib/State/pagesState.svelte.js";
  import Editor from "$lib/Editor/Editor.svelte";
  import { type EditorContent } from "$lib/Editor/utils/editorContent.js";

  const { data } = $props();
  const id = data.id;

  const page = pagesState.pages[id];

  let editorContent: EditorContent = $state({
    ops: [],
    history: {
      undo: [],
      redo: [],
    },
  });
</script>

<div class="page-container">
  <header>
    <button class="back-button" onclick={() => history.back()}>Back</button>
    <h1>{page.title}</h1>
  </header>

  <section>
    <Editor bind:data={editorContent} />
  </section>
</div>

<style>
  .page-container {
    display: grid;
    grid-auto-rows: min-content 1fr;
    height: 100%;
  }
  header {
    display: flex;
    align-items: center;
    gap: var(--m);
    padding: var(--m);
    background-color: var(--main);
  }
  button {
    background-color: var(--bg-alt);
    color: var(--text);
    padding: var(--m);
  }
  button:active {
    background-color: var(--main);
    color: var(--bg);
  }
</style>
