import { HEADERS } from './common';

export const simpleServer = {
    staff: {
        getAll: async () => {
            return [
                {
                    id: 'hash1',
                    name: 'Vova',
                    phone: '8 888 999 00 00',
                    position: 'Массажист',
                    email: 'ggg@email.com'
                },
                {
                    id: 'hash2',
                    name: 'Vova',
                    phone: '8 888 999 00 00',
                    position: 'Массажист',
                    email: 'ggg@email.com'
                },
                {
                    id: 'hash3',
                    name: 'Misha',
                    phone: '8 888 999 00 00',
                    position: 'Массажист',
                    email: 'ggg@email.com'
                }
            ]
        },
        getCurr: async (id) => {
            return {
                id: 'hash',
                name: 'Vova',
                phone: '8 888 999 00 00',
                position: 'Массажист',
                email: 'ggg@email.com'
            }
        },
        edit: async (obj) => {

        },
        del: async (id) => {

        },
        create: async (obj) => {

        },
    },
    service: {
        getAll: async () => {
            return [
                {
                    id: 'hash1',
                    name: 'Массаж',
                    price: '2600',
                },
                {
                    id: 'hash2',
                    name: 'Массаж-спины',
                    price: '2600',
                },
                {
                    id: 'hash3',
                    name: 'Массаж2',
                    price: '2600',
                },
            ]
        },
        getCurr: async (id) => {
            return {
                id: 'dfsdfsdfsdfsdf',
                name: 'Vova',
                phone: '8 888 999 00 00',
                post: 'Массажист',
            }
        },
        edit: async (obj) => {

        },
        del: async (id) => {

        },
        create: async (obj) => {

        },
    },
    client: {
        getAll: async () => {
            return [
                {
                    id: 'hash1',
                    name: 'Vova',
                    phone: '8 888 999 00 00',
                    email: 'ggg@email.com'
                },
                {
                    id: 'hash2',
                    name: 'Vova',
                    phone: '8 888 999 00 00',
                    email: 'ggg@email.com'
                },
                {
                    id: 'hash3',
                    name: 'Misha',
                    phone: '8 888 999 00 00',
                }
            ]
        },
        getCurr: async (id) => {
            return {
                id: 'hash2',
                name: 'Vova',
                phone: '8 888 999 00 00',
                email: 'ggg@email.com'
            }
        },
        edit: async (obj) => {

        },
        del: async (id) => {

        },
        create: async (obj) => {

        },
    },
    record: {
        getAll: async () => {
            const result = [
                {
                    id: 'hash1',
                    staff: {
                        id: 'hash3',
                        name: 'Misha',
                        phone: '8 888 999 00 00',
                        position: 'Массажист',
                        email: 'ggg@email.com'
                    },
                    client: {
                        id: 'hash2',
                        name: 'Vova',
                        phone: '8 888 999 00 00',
                        email: 'ggg@email.com'
                    },
                    service: {
                        id: 'hash1',
                        name: 'Массаж',
                        price: '2600',
                    },
                    dateFrom: '20 мая 2021 11:00',
                    dateTo: '20 мая 2021 12:00'
                },
            ];

            return result.map(item => {
                return {
                    id: item.id,
                    staff: item.staff.name,
                    client: item.client.name,
                    clientPhone: item.client.phone,
                    service: item.service.name,
                    price: item.service.price,
                    dateFrom: item.dateFrom,
                    dateTo: item.dateTo,
                }
            })
        },
        getCurr: async (id) => {
            return {
                id: 'hash1',
                staff: {
                    id: 'hash3',
                    name: 'Misha',
                    phone: '8 888 999 00 00',
                    position: 'Массажист',
                    email: 'ggg@email.com'
                },
                client: {
                    id: 'hash2',
                    name: 'Vova',
                    phone: '8 888 999 00 00',
                    email: 'ggg@email.com'
                },
                service: {
                    id: 'hash1',
                    name: 'Массаж',
                    price: '2600',
                },
                dateFrom: '20 мая 2021 11:00',
                dateTo: '20 мая 2021 12:00'
            }
        },
        edit: async (obj) => {

        },
        del: async (id) => {

        },
        create: async (obj) => {

        },
        getTimes: async (date, staffId) => {
            return [
                {
                    id: '11.00 - 12.00',
                    dateFrom: '20 мая 2021 11:00',
                    dateTo: '20 мая 2021 12:00'
                },
                {
                    id: '12.00 - 13.00',
                    dateFrom: '20 мая 2021 11:00',
                    dateTo: '20 мая 2021 12:00'
                },
                {
                    id: '13.00 - 14.00',
                    dateFrom: '20 мая 2021 11:00',
                    dateTo: '20 мая 2021 12:00'
                }
            ]
        }
    }
}
