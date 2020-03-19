import axios from '_u/request'

//游戏添加
//obj 添加的数据
export const GameAdd = (obj) => {
    return axios.post('/api/Games/GameAdd', obj)
}