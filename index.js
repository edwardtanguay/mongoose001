import DataManager from './DataManager.js';

const dm = new DataManager();
dm.addUser({
	name: "Timo Anglerheim222",
	username: "tng",
	email: "ta@gmail.com"
}, () => {
	dm.close();
});

