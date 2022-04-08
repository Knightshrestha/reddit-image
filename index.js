const axios = require('axios');

async function ImageExtractor(subreddit, limit) {
	let url = 'https://api.reddit.com/r/AnimeWallpaperSFW/hot?limit=10';

	const response = await axios.get(url).then((res) => res.data);

	const { data } = response;
	const { children } = data;

	children.map((child) => {
		const { data: info } = child;
		const { link_flair_text: type, title, subreddit, url } = info;
		console.log('type', type + ' ' + url + ' ' + title);
	});

}

ImageExtractor()


module.exports = {
	ImageExtractor
};
