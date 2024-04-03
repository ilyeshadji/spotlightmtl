import api from './api.ts';

export default {
    async getAll() {
        return api.get(`/event`);
    },
};
