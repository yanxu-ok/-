import axios from '_u/request'

//游戏列表页
export const Category = () => {
    return axios.get('/api/Games/GameCategory')
}