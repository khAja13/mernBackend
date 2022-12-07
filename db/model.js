const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	email: {
		type: String,
		// unique: [true, "Mail id should be unique"],
	},
	phone: {
		type: Number,
		// unique: [true, "Mail id should be unique"],
	},
});

const User = new mongoose.model("user", UserSchema);

module.exports = User;
