import axios from '_u/request';


export const GetGameCount = () => {
    return axios.get(
        '/api/Index/GameCount',
    );
};