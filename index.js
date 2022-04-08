import axios from 'axios';

let url = 'https://api.reddit.com/r/AnimeWallpaperSFW/hot?limit=10'

const response = await axios
  .get(url)
  .then((res) => res.data)
	// .catch((err) => console.log(err));


const { data } = response
const { children } = data 

children.map((child) => {
	const { data: info } = child;
	const { link_flair_text: type, title, subreddit, url } = info;
	console.log('type', type + " " + url + " " + title);
});



// const {link_flair_text: type , subreddit, url } = info

