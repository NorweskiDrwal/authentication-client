import axios from 'axios';

const ROOT_URL = 'http://localhost:3090';

export const loginUser = ({email, password}) => {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/login`, { email, password });
    }
};