<script lang="ts">
    import Toolbar from "../UI/Elements/UIToolbar.svelte";
</script>

<Toolbar>
    <div class="text-format-toolbar">
        <div class="heading-options">
          <button class="huge"></button>
          <button class="large"></button>
          <button class="normal"></button>
          <button class="mono"></button>
        </div>
        <div class="format-options">
          <button class="bold"></button>
          <button class="italic"></button>
          <button class="underline"></button>
          <button class="strike"></button>
          <button class="checkbox"></button>
          <button class="list"></button>
          <button class="indent-right"></button>
          <button class="indent-left"></button>
        </div>
      </div>
</Toolbar>

<style>
  .text-format-toolbar {
    display: flex;
    flex-direction: column;
  }
  .heading-options {
    display: flex;
  }
  .format-options {
    display: flex;
  }
</style>
