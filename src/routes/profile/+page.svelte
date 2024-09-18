<script lang="ts">
    import { getAppContext } from '$lib/app.svelte'
    import { getFirebaseContext } from '$lib/firebase.svelte'
    import { base } from '$app/paths'
    import { themes } from '$lib/Components/ThemeWrapper/themes.svelte'
    import Button from '$lib/Components/UI/Button.svelte'
    import TextInput from '$lib/Components/UI/TextInput.svelte'
    import Toggle from '$lib/Components/UI/Toggle.svelte'

    const firebase = getFirebaseContext()
    const app = getAppContext()
</script>

<main>
    <div class="home-button">
        <Button href="{base}/" iconURL="{base}/images/icons/home.svg"
            >Home</Button
        >
    </div>

    <section>
        <h1>Settings</h1>
        <div class="settings-block">
            <label
                class="settings-option"
                for="spellcheck"
                style="cursor: pointer"
            >
                <Toggle bind:checked={app.spellcheck} id="spellcheck" />
                <p class:disabled={!app.spellcheck}>Spellcheck</p>
            </label>
        </div>
    </section>

    <section>
        <h1>Theme</h1>

        <div class="theme-grid">
            {#each themes as theme}
                <Button
                    {theme}
                    onclick={() => (app.themeName = theme.name)}
                    selected={app.themeName === theme.name}>{theme.name}</Button
                >
            {/each}
        </div>
    </section>

    <section>
        <h1>Profile</h1>

        <div class="settings-block">
            <div class="settings-option">
                <p>Username:</p>
                <TextInput bind:value={app.username} />
            </div>
            <div class="settings-option">
                <p>Email:</p>
                <p>{firebase.user?.email}</p>
            </div>
            <div class="logout">
                <Button
                    iconURL="{base}/images/icons/logout.svg"
                    variant="error"
                    onclick={() => {
                        firebase.logout()
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
        padding: var(--l);
        margin-inline: auto;
    }

    .home-button {
      width: max-content;
    }
    section {
        padding-bottom: var(--l);
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
