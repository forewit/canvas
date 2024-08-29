<script lang="ts">
  import type Quill from "quill/core";
  let { quill, hidden = false }: { quill: Quill, hidden: boolean } = $props();

</script>

<div id="toolbar-container" class:hidden>
  <span class="ql-formats">
    <select class="ql-size"></select>
    <select class="ql-align"></select>
  </span>
  <span class="ql-formats">
    <button class="ql-bold"></button>
    <button class="ql-italic"></button>
    <button class="ql-underline"></button>
    <button class="ql-strike"></button>
  </span>
  <span class="ql-formats">
    <button class="ql-list" value="ordered"></button>
    <button class="ql-list" value="bullet"></button>
    <button class="ql-indent" value="-1"></button>
    <button class="ql-indent" value="+1"></button>
  </span>
</div>

<style>
  .hidden {
    display: none;
  }
</style>