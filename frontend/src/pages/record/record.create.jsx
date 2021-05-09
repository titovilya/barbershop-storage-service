import * as React from 'react';
import { DatePicker, Select, TextInput } from 'react-materialize';
import { PageTitle } from '../../components/pageTitle/pageTitle';
import { simpleServer } from './../../server/simple';
import { uri as serviceUri } from '../service/index';
import { uri as staffUri } from '../staff/index';
import { uri as clientUri } from '../client/index';

/* PROPS
pageTitle
formScheme
redirectUrl
uri
*/

export class RecordCreate extends React.Component {
    state = {
        fields: {
            name: '',
            phone: '',
            service: '',
            staff: '',
            date: '',
            timeTo: '',
            timeFrom: '',
        },
        service: [],
        staff: [],
        time: [],
    }

    async componentDidMount() {
        const service = await simpleServer[serviceUri].getAll();
        const staff = await simpleServer[staffUri].getAll();

        this.setState({
            service,
            staff,
        });
    }

    inputsHandleChange = (value, field) => {
        this.setState((state) => {
            console.log(22)
            return {
                ...state,
                fields: {
                    ...state.fields,
                    [field]: value
                }
            }
        });
    }

    dateHandleChange = async (value) => {
        if (this.state.fields.staff) {
            this.inputsHandleChange(value, 'date');
            const time = await simpleServer[this.props.uri].getTimes(this.state.fields.date, this.state.fields.staff);
            this.setState({ time });
            // console.log(time)
            return;
        }
    }

    onSubmit = async () => {
        const clients = await simpleServer[clientUri].getAll();

        let clientId;

        const currClient = clients.find(client => client.phone === this.state.fields.phone);

        if (currClient && currClient.id) {
            clientId = currClient.id;
        } else {
            const newClient = await simpleServer[clientUri].create({
                name: this.state.fields.name,
                phone: this.state.fields.phone
            });
            clientId = newClient.id;
        }

        try {
            await simpleServer[this.props.uri].create({
                client: { id: clientId },
                staff: { id: this.state.fields.staff },
                service: { id: this.state.fields.service },
                date_from: this.state.fields.timeFrom,
                date_to: this.state.fields.timeTo
            });
        } catch (e) {
            console.log(e)
        } finally {
            window.location.pathname = `/${this.props.uri}`;
        }
    }

    componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state,callback)=>{
            return;
        };
    }

    render() {
        const fields = this.state.fields;
        return (
            <div className="container">
                <PageTitle title='Добавление записи' />
                <div className="row">
                    <div className="input-field col s4">
                        <TextInput
                            label='Имя клиента'
                            onChange={(e) => this.inputsHandleChange(e.target.value, 'name')}
                            s={12}
                        />
                    </div>
                    <div className="input-field col s4">
                        <TextInput
                            label='Телефон клиента'
                            s={12}
                            onChange={(e) => this.inputsHandleChange(e.target.value, 'phone')}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s4">
                        <Select
                            label='Услуга'
                            s={12}
                            onChange={(e) => this.inputsHandleChange(e.target.value, 'service')}
                        >
                            <option value="" disabled selected>Выберите услугу</option>
                            {
                                this.state.service.map((item, key) => {
                                    return (
                                        <option key={key} value={item.id}>{item.name} - {item.position}</option>
                                    );
                                })
                            }
                        </Select>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s4">
                        <Select
                            label='Сотрудник'
                            s={12}
                            onChange={(e) => this.inputsHandleChange(e.target.value, 'staff')}
                        >
                            <option value="" disabled selected>Выберите сотрудника</option>
                            {
                                this.state.staff.map((item, key) => {
                                    return (
                                        <option key={key} value={item.id}>{item.name} - {item.position}</option>
                                    );
                                })
                            }
                        </Select>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s4">
                        <DatePicker
                            s={12}
                            options={{
                                onSelect: value => this.dateHandleChange(value),
                                autoClose: true,
                            }}
                        />
                        <label htmlFor="email1">Дата</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12" style={{ display: 'flex' }}>
                        {
                            this.state.time ? this.state.time.map((item, key) => {
                                return (
                                    <p key={key}>
                                        <label>
                                            <input onChange={(e) => {
                                                console.log(e.target.value)
                                                this.inputsHandleChange(e.target.value.split('-')[0], 'timeFrom');
                                                this.inputsHandleChange(e.target.value.split('-')[1], 'timeTo');
                                            }} name="time" type="radio" value={`${item.date_from}-${item.date_to}`} />
                                            <span>{item.id}</span>
                                        </label>
                                    </p>
                                )
                            }) : 'На заданную дату нет свободного времени'
                        }
                    </div>
                </div>

                <button disabled={!fields.name || !fields.phone || !fields.service || !fields.staff || !fields.date || !fields.timeTo || !fields.timeFrom} onClick={this.onSubmit} className="btn waves-effect waves-light" type="button" name="action">Добавить</button>
            </div>
        );
    }
}
