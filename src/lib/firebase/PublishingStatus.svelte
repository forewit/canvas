<script lang="ts">
  import { base } from "$app/paths";
  import { firebaseState } from "./firebaseState.svelte";
</script>

<div
  class="status"
  class:saving={firebaseState.isPublishing}
  class:saved={!firebaseState.isPublishing && !firebaseState.isLoading}
>
  <span
    class="status-icon"
    style="-webkit-mask: url({base}/images/icons/double-checkmark.svg) no-repeat center / contain;
        mask: url({base}/images/icons/double-checkmark.svg) no-repeat center / contain;"
  ></span>
</div>

<style>
  .status {
    width: 1rem;
    aspect-ratio: 1;

    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
  }
  .status.saved,
  .status.saving {
    opacity: 1;
  }
  .status-icon {
    background-color: var(--main);
    width: 100%;
    aspect-ratio: 1;
  }
  .saving .status-icon {
    mask: none !important;
    -webkit-mask: none !important;
    background-color: transparent;

    width: 90%;
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
