<script lang="ts">
  type props = {
    placeholder?: string;
    value?: string;
    oninput?: () => void;
    disabled?: boolean;
    variant?: "alt";
    name?: string;
    id?: string;
    type?: "text" | "password" | "email" | "hidden" | "url";
  };

  let {
    placeholder,
    value = $bindable(),
    oninput = () => {},
    disabled = false,
    name = "",
    variant,
    id,
    type = "text",
  }: props = $props();
</script>

<input
  {id}
  {type}
  {oninput}
  {placeholder}
  {disabled}
  {name}
  bind:value
  spellcheck="false"
  class:alt={variant === "alt"}
/>

<style>
  input {
    height: auto;
    outline: none;
    outline-offset: calc(-1 * var(--xs));
    border: none;
    background-color: var(--bg-alt);
    color: var(--text);
    padding-inline: var(--m);
  padding-block: var(--s);
    border-radius: var(--s);
  }
  input.alt {
    background-color: var(--bg);
  }

  input:focus {
    outline: var(--main) solid var(--xs);

  }
  input:invalid {
    outline: var(--error) solid var(--xs);
    color: var(--error);
  }
</style>
