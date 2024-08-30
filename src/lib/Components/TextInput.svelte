<script lang="ts">
  type props = {
    placeholder?: string;
    value?: string | number;
    oninput?: () => void;
    disabled?: boolean;
    variant?: "alt";
  };

  let {
    placeholder,
    value = $bindable(),
    oninput = () => {},
    disabled = false,
    variant,
  }: props = $props();
</script>

<input
  type="text"
  {oninput}
  {placeholder}
  {disabled}
  bind:value
  spellcheck="false"
  class:alt={variant === "alt"}
/>

<style>
  input {
    outline: none;
    outline-offset: -2px;
    border: none;
    background-color: var(--bg-alt);
    color: var(--text);
    padding: var(--m);
    border-radius: var(--s);
  }
  input.alt {
    background-color: var(--bg);
  }

  input:focus {
    outline: var(--main) solid 2px;
  }
  input:invalid {
    outline: var(--error) solid 2px;
    color: var(--error);
  }
</style>
