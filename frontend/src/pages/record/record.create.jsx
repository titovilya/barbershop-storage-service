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
            time: ''
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
        console.log(value)
        this.setState((state) => {
            console.log(22)
            return {
                ...state,
                fields: {
                    ...state.fields,
                    [field]: value
                }
            }
        })
    }

    dateHandleChange = async (value) => {
        if (this.state.fields.staff) {
            this.inputsHandleChange(value, 'date');
            const time = await simpleServer[this.props.uri].getTimes(this.state.time, this.state.staff);
            this.setState({ time });
            return;
        }
    }

    onSubmit = async () => {
        // await simpleServer[this.props.uri].create(Object.assign({

        // }));
        // window.location.pathname = `/${this.props.uri}`;
    }

    componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state,callback)=>{
            return;
        };
    }

    render() {
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
                                            <input onChange={(e) => this.inputsHandleChange(e.target.value, 'time')} name="time" type="radio" value={item.dateFrom} />
                                            <span>{item.id}</span>
                                        </label>
                                    </p>
                                )
                            }) : 'На заданную дату нет свободного времени'
                        }
                    </div>
                </div>

                <button onClick={this.onSubmit} className="btn waves-effect waves-light" type="button" name="action">Добавить</button>
            </div>
        );
    }
}
