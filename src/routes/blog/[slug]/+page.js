/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const post = import(`${params}.md`);
	const { title, date } = post.metadata;
	const content = post.default;
	const slug = params;
	return {
		content,
		title,
		date,
		params
	};
}