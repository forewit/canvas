<script lang="ts">
  import { base } from "$app/paths";
  import { getFirebaseContext } from "$lib/firebase.svelte";
  import Icon from "$lib/Components/Icon.svelte";

  const firebase = getFirebaseContext();
</script>

{#if !firebase.isLoading}
  {#if firebase.isPublishing}
    <div class="spinner">
      <span></span>
    </div>
  {:else}
    <Icon url="{base}/images/icons/double-checkmark.svg" size="1.2em"/>
  {/if}
{/if}

<style>
  .spinner {
    width: 1.2em;
    height: 1.2em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .spinner span {
    background-color: transparent;
    width: 90%;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 2px solid var(--bg-alt);
    border-right-color: var(--main);
    animation: rotate 1s infinite linear;
  }
  @keyframes rotate {
    to {
      transform: rotate(1turn);
    }
  }
</style>
