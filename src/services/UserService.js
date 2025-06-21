import { User } from '../models/User.js'

class UserService {
    constructor() { }

    createUser = (data) => {
        const foundOne = User.findOne({ email: data.email });
        if (foundOne) {
            throw new Error('User with this title already exists');
        }
        const user = User.create(user);
        return user
    }

    getUsers = () => {
        const users = User.find({});
        if (!users || users.length === 0) {
            throw new Error('No users found');
        }
        return users;
    }
}

export default UserService;