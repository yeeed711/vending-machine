import { FETCH_BASE_URL, FETCH_FAIL_MESSAGE, FETCH_SERVER_ERROR_MESSAGE } from '../constants/index.js';

export const fetchData = async () => {
    try {
        const response = await fetch(`${FETCH_BASE_URL}`);
        if (!response.ok) {
            throw new Error(`${FETCH_SERVER_ERROR_MESSAGE}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`${FETCH_FAIL_MESSAGE} ${error.message}`);
    }
};
