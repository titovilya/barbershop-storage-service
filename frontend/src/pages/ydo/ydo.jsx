// import * as React from 'react';
// import { Route } from "react-router-dom";
// import { PageContainer } from './../../components/routeContainer/routeContainer';
// import { PagePreview } from '../../layouts/preview/preview';
// import { PageCreate } from '../../layouts/create/create';
// import { PageEdit } from '../../layouts/edit/edit';
// import { PageRead } from '../../layouts/read/read';

// export const formScheme = [
//     { field: 'name', name: 'ФИО' },
//     { field: 'phone', name: 'Телефон' },
//     { field: 'email', name: 'Email' },
//     { field: 'birthday', name: 'День рождения' },
//     { field: 'password', name: 'Пароль' },
// ]

// export const tableColumns = [
//     { title: '№', field: 'id' },
//     { title: 'Имя', field: 'username' },
//     { title: 'Телефон', field: 'phone' },
//     { title: 'Роль', field: 'role' },
//     { title: 'День рождения', field: 'birthday' },
//     { title: '', field: 'edit' },
//     { title: '', field: 'read' },
//     { title: '', field: 'delete' },
// ];

// export class Staff extends React.Component {
//     render() {
//         return (
//             <>
//                 <Route path="/staff/create">
//                     <PageCreate
//                         pageTitle='Добавление сотрудника '
//                         uri='staff'
//                         formScheme={formScheme}
//                     />
//                 </Route>
//                 <Route path="/staff/read/:id">
//                     <PageContainer
//                         component={PageRead}
//                         componentProps={{
//                             pageTitle: 'Просмотр сотрудника',
//                             uri: 'staff',
//                             formScheme: formScheme,
//                         }}
//                     />
//                 </Route>
//                 <Route path="/staff/edit/:id">
//                     <PageContainer
//                         component={PageEdit}
//                         componentProps={{
//                             pageTitle: 'Редактирование сотрудника',
//                             uri: 'staff',
//                             formScheme: formScheme,
//                         }}
//                     />
//                 </Route>
//                 <Route path="/staff">
//                     <PagePreview
//                         pageTitle='Сотрудники'
//                         buttonName='Добавить сотрудника'
//                         uri='staff'
//                         tableColumns={tableColumns}
//                     />
//                 </Route>
//             </>
//         )
//     }
// }
