import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    const id = params.slug;
    return { id }
    throw error(404, 'Not found');
}

export const prerender = 'auto';