<script lang="ts">
    import UIToolbar from "$lib/components/UI/Elements/UIToolbar.svelte";

    export let hidden = true;
    export let toolbarElm: HTMLElement;
</script>

<UIToolbar>
  <div id="toolbar-container" bind:this={toolbarElm} class:hidden>
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
</UIToolbar>

<style>
  .hidden {
    display: none;
  }
</style>
