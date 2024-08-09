/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const title = post.title;
	// const content = post.body;

	return {
		// content,
		title
	};
}