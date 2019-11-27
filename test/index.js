const { api } = require('../dist');

(async () => {
	console.log(await api.other.meme());
})();