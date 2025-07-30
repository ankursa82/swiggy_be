import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    password: String
});


const UserModel = mongoose.model('Users', userSchema);

export default UserModel;
