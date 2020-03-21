import axios from '_u/request';

//obj 提交的评测对象
export const EvaluationAdd = (obj) => {
    return axios.post(
        '/api/Evaluation/TestAdd',obj
    );
};