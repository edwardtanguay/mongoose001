import mongoose from 'mongoose';

// schema
const userSchema = new mongoose.Schema({
	name: String,
	username: String,
	email: String
});
userSchema.methods.displayInfoLine = function displayInfoLine() {
// userSchema.displayInfoLine = () => {
	return `${this.name} (${this.username})`;
}

// model
const User = mongoose.model('User', userSchema, 'users100');


const main = async () => {
	await mongoose.connect('mongodb://localhost:27017/api001');

	const user = new User({ name: 'nnn', username: 'uuu' });
	await user.save();
	console.log(user.name);

	console.log(user.displayInfoLine());
}

main().catch(err => console.log(err));