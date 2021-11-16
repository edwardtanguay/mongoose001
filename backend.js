import mongoose from 'mongoose';

// schema
const userSchema = new mongoose.Schema({
	name: String,
	username: String,
	email: String
});

// model
const User = mongoose.model('User', userSchema);

const main = async () => {
	await mongoose.connect('mongodb://localhost:27017/api001');

	const user = new User({ name: 'nnn' });
	console.log(user.name);
}

main().catch(err => console.log(err));