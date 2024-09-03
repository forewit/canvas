<script lang="ts">
  import { getAppContext } from "$lib/app.svelte";
  import { getFirebaseContext } from "$lib/firebase.svelte";
  import { base } from "$app/paths";
  import { themes } from "$lib/Components/ThemeWrapper/themes.svelte";
  import Button from "$lib/Components/Button.svelte";
  import TextInput from "$lib/Components/TextInput.svelte";
  import Toggle from "$lib/Components/Toggle.svelte";
  import Icon from "$lib/Components/Icon.svelte";
  import Folder from "$lib/Components/Folder.svelte";

  const firebase = getFirebaseContext();
  const app = getAppContext();
</script>

<header>
  <a class="home" href="{base}/"
    ><Button variant="alt" iconURL="{base}/images/icons/home.svg">Home</Button
    ></a
  >
</header>

<main>
  <section>
    <h1>Settings</h1>
    <div class="settings-block">
      <label class="settings-option" for="spellcheck" style="cursor: pointer">
        <Toggle bind:checked={app.spellcheck} id="spellcheck" />
        <p class:disabled={!app.spellcheck}>Spellcheck</p>
      </label>
      <h3>Appearance</h3>
      <div class="settings-option">
        <div class="settings-block">
          <label
            class="settings-option"
            for="showFolderName"
            style="cursor: pointer"
          >
            <Toggle bind:checked={app.showFolderName} id="showFolderName" />
            <p class:disabled={!app.showFolderName}>Show folder names</p>
          </label>
          <label
            class="settings-option"
            for="showFolderPreview"
            style="cursor: pointer"
          >
            <Toggle
              bind:checked={app.showFolderPreview}
              id="showFolderPreview"
            />
            <p class:disabled={!app.showFolderPreview}>Show folder previews</p>
          </label>
        </div>
        <div style="margin-left: var(--l)">
          <Folder
            folder={{
              name: "Example",
              pages: [""],
              subfolders: ["", ""],
              color: "var(--main)",
            }}
          />
        </div>
      </div>
    </div>
  </section>

  <section>
    <h1>Theme</h1>

    <div class="theme-grid">
      {#each themes as theme}
        <Button
          {theme}
          onclick={() => (app.theme = theme.name)}
          selected={app.theme === theme.name}>{theme.name}</Button
        >
      {/each}
    </div>
  </section>

  <section>
    <h1>Profile</h1>

    <div class="settings-block">
      <div class="settings-option">
        <h3>Username:</h3>
        <TextInput bind:value={app.username} />
      </div>
      <div class="settings-option">
        <h3>Email:</h3>
        <p>{firebase.user?.email}</p>
      </div>
      <br />
      <div class="logout">
        <Button
          iconURL="{base}/images/icons/logout.svg"
          variant="error"
          onclick={() => {
            firebase.logout();
          }}>Logout</Button
        >
      </div>
    </div>
  </section>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    max-width: 800px;
    padding-inline: var(--l);
    margin-inline: auto;
  }

  header {
    position: sticky;
    top: 0;
    z-index: 999;
    padding-block: var(--m);
    padding-inline: calc(var(--safe-area-inline) + var(--m));
    background-color: var(--bg-alt);
  }
  section {
    padding-bottom: var(--l);
  }

  a.home {
    display: block;
    width: max-content;
  }

  .theme-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: var(--m);
  }

  .settings-block {
    display: flex;
    flex-direction: column;
    gap: var(--m);
  }

  .settings-option {
    display: flex;
    width: fit-content;
    align-items: center;
    gap: var(--m);
  }

  .logout {
    display: flex;
    justify-content: flex-end;
  }

  .disabled {
    opacity: 0.5;
  }
</style>
