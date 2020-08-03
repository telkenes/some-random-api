const { SRAClient } = require('../dist');

(async () => {
	const start = Date.now();
	const client = new SRAClient();
	let output = await client.fetch('/meme');
	console.log(output);
	output = await client.fetch('/meme');
	console.log(output);
	console.log(Date.now() - start);
})();