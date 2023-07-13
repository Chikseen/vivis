export default defineEventHandler((event) => {
	const res = event.node.res;
	const year = 60 * 60 * 24 * 4 * 12;
	const hour = 60 * 60 * 24;
	const url = event.node.req.url;
	if (url) {
		const maxage = url.match(/(.+)\.(jpg|jpeg|gif|css|png|js|ico|svg|mjs|webp)/) ? year : hour;
		res.setHeader("Cache-Control", `max-age=${maxage} s-maxage=${maxage}`);
	}
});
