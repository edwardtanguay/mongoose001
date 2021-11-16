import DataManager from './DataManager.js';

const dm = new DataManager();
(async () => {
	const names = ['Angie', 'Alice', 'Angela'];
	for (let x = 0; x < names.length; x++) {
		await dm.addUser({
			name: names[x]
		});
	}
	dm.close();
})();

