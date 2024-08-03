<script lang="ts">
    import "quill/dist/quill.core.css";
    import "./quill.css";
    import type Quill from "quill/core";
    import type { Delta } from "quill/core";
    import type { HistoryStack } from "$lib/stores/tabsStore";
    import type { StackItem } from "quill/modules/history";
    import { onMount } from "svelte";
    import { tabsStore } from "$lib/stores/tabsStore";
    import { settingsStore } from "$lib/stores/settingsStore";
  
    export let tabID: string;
    export let disabled = false;
    export const focus = () => {
      if (quillEditor) quillEditor.setSelection(quillEditor.getLength(), 0);
    }
    export const blur = () => {
      if (quillEditor) quillEditor.blur();
    }
  
    let quillEditor: Quill;
    let editorDiv: HTMLElement;
  
    $: if (disabled) {
      quillEditor?.disable();
    } else {
      quillEditor?.enable();
    }
  
    $: quillEditor?.root.setAttribute(
      "spellcheck",
      $settingsStore.spellCheck.toString()
    );
  
    // a debounce function that only triggers on the trailing edge
    const debounce = (func: Function, timeout = 300) => {
      // @ts-ignore
      let timer;
      // @ts-ignore
      return (...args) => {
        // @ts-ignore
        clearTimeout(timer);
        timer = setTimeout(() => {
          // @ts-ignore
          func.apply(this, args);
        }, timeout);
      };
    };
  
    async function rebuildHistoryStack(stack: HistoryStack) {
      if (!quillEditor) return;
      const { Delta: Delta, Range: Range } = await import("quill/core");
      if (stack.undo.length > 0) {
        for (var i = 0; i < stack.undo.length; i++) {
          const index = stack.undo[i].range?.index;
          const length = stack.undo[i].range?.length;
  
          const item: StackItem = {
            delta: new Delta(stack.undo[i].delta.ops),
            range:
              index !== undefined && length !== undefined
                ? new Range(index, length)
                : null,
          };
          quillEditor.history.stack.undo.push(item);
        }
      }
      if (stack.redo.length > 0) {
        for (var i = 0; i < stack.redo.length; i++) {
          const index = stack.redo[i].range?.index;
          const length = stack.redo[i].range?.length;
  
          const item: StackItem = {
            delta: new Delta(stack.redo[i].delta.ops),
            range:
              index !== undefined && length !== undefined
                ? new Range(index, length)
                : null,
          };
          quillEditor.history.stack.redo.push(item);
        }
      }
    }
  
    function handleClickingLink(e: Event) {
      if (quillEditor && quillEditor.getSelection()?.length === 0) {
        window.open((e.target as HTMLAnchorElement).href, "_blank");
      }
    }
  
    function loadContentFromTab() {
      if (!quillEditor || !$tabsStore[tabID]) return;
  
      const ops = $tabsStore[tabID].ops;
      quillEditor.setContents(ops);
  
      const history = $tabsStore[tabID].history;
      rebuildHistoryStack(history);
    }
  
    function saveContentToTab() {
      if (!quillEditor || !$tabsStore[tabID]) return;
  
      $tabsStore[tabID].ops = quillEditor.getContents().ops;
      const history = structuredClone(quillEditor.history.stack);
      $tabsStore[tabID].history = history;
    }
    const debounced_saveContentToTab = debounce(saveContentToTab, 500);
  
    function formatLinks() {
      if (!quillEditor) return;
      quillEditor.formatText(0, quillEditor.getLength(), "link", false, "api");
      const text = quillEditor.getText();
  
      const urlRegex = /https?:\/\/\S+/gi;
      const urlMatches = text.matchAll(urlRegex);
      for (const match of urlMatches) {
        quillEditor.formatText(
          match.index,
          match[0].length,
          "link",
          match[0],
          "api"
        );
      }
  
      const emailRegex = /.+\@.+\..+/gi;
      const emailMatches = text.matchAll(emailRegex);
      for (const match of emailMatches) {
        quillEditor.formatText(
          match.index,
          match[0].length,
          "link",
          "mailto:" + match[0],
          "api"
        );
      }
  
      // make links clickable
      document.querySelectorAll(".ql-editor a").forEach((a) => {
        a.addEventListener("click", handleClickingLink);
      });
    }
    const debounced_formatLinks = debounce(formatLinks, 500);
  
    function handleQuillInput(newDelta: Delta, oldDelta: Delta, source: string) {
      if (source === "user") {
        const firstLine = quillEditor.getText().split("\n")[0].trim();
        $tabsStore[tabID].title = firstLine === "" ? "Untitled" : firstLine;
  
        debounced_formatLinks();
        debounced_saveContentToTab();
      }
    }
  
    async function addEditor() {
      const { default: Quill } = await import("quill");
  
      quillEditor = new Quill(editorDiv, {
        formats: ["bold", "italic", "underline", "strike", "code", "link"],
        placeholder: "Enter text here",
      });
  
      loadContentFromTab();
      formatLinks();
      quillEditor.on("text-change", handleQuillInput);
  
      quillEditor.keyboard.addBinding({ key: "/", altKey: true }, () => {
        quillEditor.format("code", !quillEditor.getFormat().code);
      });
      quillEditor.keyboard.addBinding({ key: "-", altKey: true }, () => {
        quillEditor.format("strike", !quillEditor.getFormat().strike);
      });
    }
  
    onMount(() => {
      addEditor();
    });
  </script>
  
  <div class="quill-editor-container" class:disabled>
    <div class="quill-editor" bind:this={editorDiv} />
  </div>
  
  <style>
    .disabled {
      display: none !important;
    }
    .quill-editor-container {
      background-color: var(--bg);
    }
  </style>
  