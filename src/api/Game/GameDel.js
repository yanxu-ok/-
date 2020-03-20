import axios from '_u/request'

//游戏删除
//id 游戏id
export const GameDel = (id) => {
    return axios.post(`/api/Games/GameDel?gameId=${id}`)
}