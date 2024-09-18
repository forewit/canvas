<script lang="ts">
    import { type Snippet } from 'svelte'
    import {
        type Theme,
        applyTheme,
    } from '$lib/Components/ThemeWrapper/themes.svelte'
    import Icon from '$lib/Components/UI/Icon.svelte'

    type Props = {
        children?: Snippet
        onclick?: () => void
        theme?: Theme
        variant?: 'alt' | 'error'
        selected?: boolean
        disabled?: boolean
        iconURL?: string
        href?: string
        id?: string
    }

    let {
        children,
        iconURL,
        onclick,
        theme,
        variant,
        selected = false,
        disabled = false,
        href,
        id,
    }: Props = $props()

    let elm: HTMLButtonElement | HTMLAnchorElement;

    export function getElm () {
        return elm
    }

    $effect(()=>{
        if (theme && elm) applyTheme(elm, theme)
    })
</script>

{#if href}
    <a
        bind:this={elm}
        {id}
        {href}
        tabindex={disabled ? -1 : undefined}
        class="button"
        class:selected
        class:disabled
        class:error={variant === 'error'}
        class:alt={variant === 'alt'}
    >
        {#if iconURL}
            <Icon url={iconURL} size="1.2em" color="var(--icon-color)" />
        {/if}
        {#if children}
            {@render children()}
        {/if}
    </a>
{:else}
    <button
        bind:this={elm}
        {id}
        {onclick}
        tabindex={disabled ? -1 : undefined}
        class="button"
        class:selected
        class:disabled
        class:error={variant === 'error'}
        class:alt={variant === 'alt'}
    >
        {#if iconURL}
            <Icon url={iconURL} size="1.2em" color="var(--icon-color)" />
        {/if}
        {#if children}
            {@render children()}
        {/if}
    </button>
{/if}

<style>
    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--s);
        background-color: var(--bg-alt);
        color: var(--text);
        padding: var(--m);
        border-radius: var(--s);
        border: none;
        outline: none;

        --icon-color: var(--text);
    }
    .button.error {
        background-color: var(--error);
        color: var(--bg);

        --icon-color: var(--bg);
    }
    .button.alt {
        background-color: var(--bg);
    }

    .button:focus-visible {
        outline: var(--main) dashed var(--xs);
        outline-offset: calc(-1 * var(--xs));
    }
    .button.error:focus-visible {
        outline: var(--bg-alt) dashed var(--xs);
        outline-offset: calc(-1 * var(--xs));
    }

    .button.selected {
        outline: var(--xs) solid var(--main);
        outline-offset: calc(-1 * var(--xs));
    } 

    .button:active {
        background-color: var(--main);
        color: var(--bg);

        --icon-color: var(--bg);
    }

    .button.disabled {
        opacity: 0.5;
        pointer-events: none;
    }
</style>
