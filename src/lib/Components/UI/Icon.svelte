<script lang="ts">
  type Props = {
    url: string;
    size?: string;
    color?: string;
  };

  let {
    url,
    size = "1em",
    color = "var(--main)",
}: Props = $props();
</script>

<div class="icon" >
  <span
    style="-webkit-mask: url({url}) no-repeat center / contain;
        mask: url({url}) no-repeat center / contain; 
        width: {size}; 
        height: {size}; 
        background-color: {color};"
  ></span>
</div>

<style>
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    width: 100%;
    aspect-ratio: 1;
  }
</style>
