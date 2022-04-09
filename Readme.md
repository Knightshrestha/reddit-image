
<p align="center">

</p>

<h1 align="center">Reddit Wallpaper Links</h1>
<p align="center">A JavaScript package for fetching reddit wallpapers.</p>
<p align="center"><a href="https://github.com/Knightshrestha/reddit-image">Github</a></p>

<p align="center">
    <a href="https://www.npmjs.com/package/reddit-wallpaper-links">
    <img src="https://img.shields.io/npm/v/reddit-wallpaper-links"/></a>
    <img src="https://img.shields.io/bundlephobia/min/reddit-wallpaper-links"/>
    <a href="https://github.com/Knightshrestha/reddit-image/blob/main/LICENSE"><img src="https://img.shields.io/github/license/Knightshrestha/reddit-image"/></a>
</p>

<br/>

Reddit Wallpaper Links is a JavaScript package that can fetch bulk wallpapers. Supports node.
- Bulk wallpapers
- Lightweight <small><code><20KB</code></small>

The code is based on <a href="https://arifszn.com/reddit-image-fetcher/">Reddit Image Fetcher</a>

## Table of contents

- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Sample Response](#sample-response)
- [Options](#options)
- [Supported subreddits](#supported-subreddits)
- [Features missing](#features-missing)
- [License](#license)

## Installation

Install via <a href="https://www.npmjs.com/package/reddit-image-knight">NPM</a>
```
npm install reddit-wallpaper-links
```



## Usage

```js
const redditWallpaperLinks = require("reddit-wallpaper-links") 

redditWallpaperLinks.GetPosts({
subreddit:'AnimeWallpaperSFW',
limit:5,
flair:  'Mobile',
}).then(result => {console.log(result)})
```

## Sample Response

```js
[
  {
    author: 'JomarXXV',
    url: 'https://i.redd.it/3qiyu003pbs81.png',
    source: 'AnimeWallpapersSFW',
    type: 'Mobile'
  },
  {
    author: 'seyjer',
    url: 'https://i.redd.it/lbucqqw3obs81.png',
    source: 'AnimeWallpapersSFW',
    type: 'Mobile'
  },
  {
    author: 'JomarXXV',
    url: 'https://i.redd.it/2fmvc43365s81.png',
    source: 'AnimeWallpapersSFW',
    type: 'Mobile'
  }
]

```

</details>


## Options

| Property            |  Type   | Description                                              | Default |
| :-----------        | :---:   | :---------------------------------------          	     | :----:  |
| subreddit | string  | Name of the subreddit.							| AnimeWallpapersSFW
| limit	| number| How many images to get. Max is 50                		        | <code>3</code>       |
| flair| string   | <code>'Mobile'</code>                  |   <code>'Mobile'</code>   |

## Supported subreddits

- r/AnimeWallpaperSFW
- r/AnimeWallpapersSFW

## Features missing

- [ ] get it working on desktop flair as well
- [ ] get more detail about posts
- [ ] add filters to the posts
- [ ] get more than 100 posts
- [ ] work on other subreddits 


## License

**Reddit Image Knight** is licensed under the [MIT License](https://github.com/arifszn/reddit-image-fetcher/blob/main/LICENSE).