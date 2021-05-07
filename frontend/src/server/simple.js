import { uri as staffUri } from '../pages/staff/index';
import { uri as serviceUri } from '../pages/service/index';
import { uri as clientUri } from '../pages/client/index';
import { uri as recordUri } from '../pages/record/index';

const domain = 'http://localhost:8080';

const getBearer = () => {
    const accessToken = localStorage.getItem('accessToken');
    return 'Bearer ' + accessToken;
}

const HEADERS = {
    'Authorization': getBearer(),
    'Content-Type': 'application/json;charset=utf-8'
}

const get = async (uri) => {
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

        },
        create: async (obj) => {

        },
        getTimes: async (date, staffId) => {
            // let d = new Date();
            let d = new Date(date);
            console.log(d, date)
            const result = await post('appointments/get-schedule', {
                date_from: `${d.getDate()}.${d.getMonth()}.${d.getFullYear()} 00:00:00`,
                staff_id: staffId,
            });
            console.log(result);
            return result;
        }
    }
}

export { simpleServer };
