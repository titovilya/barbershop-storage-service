import { uri as staffUri } from '../pages/staff/index';
import { uri as serviceUri } from '../pages/service/index';
import { uri as clientUri } from '../pages/client/index';
import { uri as recordUri } from '../pages/record/index';

export const domain = 'http://prognosist.ru:8080';

const getBearer = () => {
    const accessToken = localStorage.getItem('accessToken');
    return 'Bearer ' + accessToken;
}

const HEADERS = {
    'Authorization': getBearer(),
    'Content-Type': 'application/json;charset=utf-8'
}

export const validateTocken = async () => {
    const response = await fetch(`${domain}/users/me`, {
        method: 'GET',
        headers: HEADERS,
    });

    const status = response.status;

    switch (status) {
        case 400:
        case 401:
        case 403:
            return false;
        default:
            return true;
    }
}

export const get = async (uri) => {
    const response = await fetch(`${domain}/${uri}`, {
        method: 'GET',
        headers: HEADERS,
    });
    return await response.json();
}

const del = async (uri, id) => {
    const response = await fetch(`${domain}/${uri}/${id}`, {
        method: 'DELETE',
        headers: HEADERS,
    });
}

const put = async (uri, obj) => {
    const response = await fetch(`${domain}/${uri}`, {
        method: 'PUT',
        headers: HEADERS,
        body: JSON.stringify(obj),
    });
    return await response.json();
}

const post = async (uri, obj) => {
    const response = await fetch(`${domain}/${uri}`, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify(obj),
    });
    return await response.json();
}

const simpleServer = {
    staff: {
        getAll: async () => {
            return await get(staffUri);
        },
        getCurr: async (id) => {
            return await get(`${staffUri}/${id}`);
        },
        edit: async (id, obj) => {
            return await put(`${staffUri}/${id}`, obj);
        },
        del: async (id) => {
            return await del(`${staffUri}`, id);
        },
        create: async (obj) => {
            return await post(`${staffUri}`, obj);
        },
    },
    services: {
        getAll: async () => {
            return await get(serviceUri);
        },
        getCurr: async (id) => {
            return await get(`${serviceUri}/${id}`);
        },
        edit: async (id, obj) => {
            return await put(`${serviceUri}/${id}`, obj);
        },
        del: async (id) => {
            return await del(`${serviceUri}`, id);
        },
        create: async (obj) => {
            return await post(`${serviceUri}`, obj);
        },
    },
    clients: {
        getAll: async () => {
            return await get(clientUri);
        },
        getCurr: async (id) => {
            return await get(`${clientUri}/${id}`);
        },
        edit: async (id, obj) => {
            return await put(`${clientUri}/${id}`, obj);
        },
        del: async (id) => {
            return await del(`${clientUri}`, id);
        },
        create: async (obj) => {
            return await post(`${clientUri}`, obj);
        },
    },
    appointments: {
        getAll: async () => {
            const result = await get(recordUri);

            return result.map(item => {
                return {
                    id: item.id,
                    staff: item.staff.name,
                    client: item.client.name,
                    clientPhone: item.client.phone,
                    service: item.service.name,
                    price: item.service.price,
                    dateFrom: item.date_from,
                    dateTo: item.date_to,
                }
            })
        },
        getCurr: async (id) => {
        },
        edit: async (obj) => {
        },
        del: async (id) => {
            return await del(`${recordUri}`, id);
        },
        create: async (obj) => {
            return await post(`${recordUri}`, obj);
        },
        getTimes: async (date, staffId) => {
            function correctDay(number) {
                const str = number.toString();
                if (str.length === 1) {
                    return '0' + str;
                }
                return str;
            }

            let d = new Date(date);

            const result = await post('appointments/get-schedule', {
                date_from: `${correctDay(d.getDate())}.${correctDay(d.getMonth())}.${d.getFullYear()} 00:00:00`,
                staff_id: staffId,
            });

            return result;
        }
    }
}

export { simpleServer };
