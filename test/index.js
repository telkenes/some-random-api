const { SRAClient } = require('../dist');

(async () => {
	const start = Date.now();
	const client = new SRAClient();
	let output = await client.fetch('/chatbot', { message: 'Hello' });
	console.log(output);
	console.log(Date.now() - start);
})();