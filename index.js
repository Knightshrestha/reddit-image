const axios = require('axios').default;

const getPosts = async ({subreddit = 'AnimeWallpapersSFW', limit = 3, flair = 'Mobile'}) => {
	const options = {
		method: 'GET',
		url: `https://api.reddit.com/r/${subreddit}/hot`,
		params: { limit: limit},
	};

  const array = [];
  
  var afterQ;

	await axios
		.request(options)
		.then(function (response) {
			const { data } = response.data;
      const { children, after } = data;
      
    afterQ = after

			children.map((res) => {
				const { data } = res;
				const {
					author,
					url,
					subreddit: source,
					link_flair_text: type,
				} = data;

        if (type === flair) {
          array.push({
				author,
				url,
				source,
				type,
			});
				}
			});

			
		})
		.catch(function (error) {
			console.error(error);
    });
  
  if (array.length < limit) {
    console.log('test')

  await axios
		.request({
			method: 'GET',
			url: `https://api.reddit.com/r/${subreddit}/hot`,
      params: {
        limit: 10,
        after: afterQ
      },
		})
		.then(function (response) {
			const { data } = response.data;
      const { children, after } = data;
      
      afterQ = after

      for (let i = 0; i < children.length; i++) {
        const element = children[i];
        const { data } = element
        const {
          author,
          url,
          subreddit: source,
          link_flair_text: type,
        } = data;

        if (type === flair) {
          array.push({
            author,
            url,
            source,
            type,
          })
        }

        if (array.length == limit) {
          break
        }
      }   
		})
		.catch(function (error) {
			console.error(error);
    });
  }

	return array;
};


module.exports = {
  GetPosts: getPosts
}
