import axios from '_u/request';

//user 用户对象
export const UserGetId = (userName) => {
    return axios.post(
        `/api/User/UserGetId?userName=${userName}`
    );
};