import axios from '_u/request';


export const EvaluationList = () => {
    return axios.get(
        '/api/Evaluation/TestList',
    );
};