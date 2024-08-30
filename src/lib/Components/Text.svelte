<script lang="ts">
  type props = {
    placeholder?: string;
    value?: string | number;
    oninput?: () => void;
  };

  let {
    placeholder,
    value = $bindable(),
    oninput = () => {},
  }: props = $props();
</script>

<input type="text" {oninput} {placeholder} bind:value />

<style>
  input {
    background-color: var(--bg-alt);
    outline: none
  }
</style>
