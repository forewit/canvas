/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    const id = params.slug;
    return { id }
}

export const prerender = true;