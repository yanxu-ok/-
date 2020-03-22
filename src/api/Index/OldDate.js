import axios from '_u/request';


export const OldDate = (userId) => {
    return axios.post(
        `/api/Index/OldDate?userId=${userId}`,
    );
};