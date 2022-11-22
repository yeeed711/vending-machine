export const fetchData = async () => {
    try {
        const response = await fetch('src/data/data.json');
        if (!response.ok) {
            throw new Error(`서버와의 연결이 불안정합니다!`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`에러가 발생했습니다! ${error.message}`);
    }
};

const FETCH_BASE_URL = 'src/data/data.json';
const FETCH_ERROR_MESSAGE = '서버와의 연결이 불안정합니다!';
