import DataManager from './DataManager.js';

const dm = new DataManager();
(async () => {
	const names = ['Jack', 'Jekyll', 'James'];
	for (const name of names) {
		await dm.addUser({name});
	};
	dm.close();
})();

