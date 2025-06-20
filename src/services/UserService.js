import { User } from '../model/User.js'

class UserService {
    constructor() { }

    createUser = (user) => {
        const foundOne = User.findOne({ email: user.email });
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