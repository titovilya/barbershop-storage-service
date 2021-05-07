export const domain = 'http://localhost:8080';

const getBearer = () => {
    const accessToken = localStorage.getItem('accessToken');
    return 'Bearer ' + accessToken;
}

export const HEADERS = {
    'Authorization': getBearer(),
    'Content-Type': 'application/json;charset=utf-8'
}
