import axios from '_u/request'

//游戏修改
//obj 是要修改的数据
export const GameEdit = (obj) => {
    return axios.post('/api/Games/GameEdit', obj)
}