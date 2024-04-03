import { BACKEND_URL } from '@env';
import axios from 'axios';

const api = axios.create({
    baseURL: `${BACKEND_URL}/api`,
});

export default api;
