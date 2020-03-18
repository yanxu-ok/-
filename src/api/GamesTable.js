import axios from '_u/request'

//游戏列表页
export const GamesTable = () => {
    return axios.get('/api/Games/GameList')
}