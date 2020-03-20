import axios from '_u/request';

export const UserList = () => {
    return axios.get(
        '/api/User/UserList'
    );
};