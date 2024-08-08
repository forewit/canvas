<script lang="ts">
    import { logout } from "$lib/Auth/authUtils";
</script>

<div class="container">
  <div class="ui-card">
    <h1>hi</h1>
    <p>there</p>
  </div>

  <button class="ui-card" onclick={logout}>Logout</button>
</div>

<style>
  .container {
    height: 100%;
    background-color: var(--bg);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h1 {
    color: var(--sub);
  }
  p {
    color: var(--text);
  }
</style>
