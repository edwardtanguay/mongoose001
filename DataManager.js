import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
	name: String,
	user: String,
	email: String
});
const userModel = mongoose.model("model", userSchema, "users100");

class DataManager {

	constructor() {
		mongoose.connect("mongodb://localhost:27017/api001");
		const db = mongoose.connection;
		db.once("open", () => {
			console.log("connection successful");
		});
	}

	addUser(user, done = null) {
		const dbUser = new userModel(user);
		dbUser.save((err, doc) => {
			if (err) return console.error(err);
			if (done !== null) {
				done();
			}
		});
	}

	close() {
		mongoose.connection.close();
	}

}

export default DataManager;