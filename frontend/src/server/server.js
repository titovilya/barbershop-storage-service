// const domain = 'http://localhost:8080';

// const getBearer = () => {
//     const accessToken = localStorage.getItem('accessToken');
//     return 'Bearer ' + accessToken;
// }

// const headers = {
//     'Authorization': getBearer(),
//     'Content-Type': 'application/json;charset=utf-8'
// }

// export const postStaff = async () => {

// }

// export const get = async (url) => {
//     console.log(url)
//     const response = await fetch(`${domain}${url}`, {
//         method: 'GET',
//         headers: headers,
//     });
//     return await response.json();
// }

// export const del = async (url) => {
//     //    return defaultValues;
// }

// export const create = async (url, obj) => {
//     // defaultValues.push(obj)
// }

// export const edit = async (url, obj) => {

// }

// export const post = async (url, obj) => {
//     const response = await fetch(`${domain}${url}`, {
//         method: 'POST',
//         headers: headers,
//         body: JSON.stringify(obj)
//     });
//     return await response.json();
// }