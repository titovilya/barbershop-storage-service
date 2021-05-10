import * as React from 'react';
import {
    Route,
    Switch,
} from "react-router-dom";

export const uri = 'about';

export class AboutIndex extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path={`/${uri}`}>
                    <div className="chat_window">
                        <div className="top_menu">
                            <div className="buttons">
                                <div className="button close"></div>
                                <div className="button minimize"></div>
                                <div className="button maximize"></div>
                            </div>
                            <div className="title">Chat</div>
                        </div>
                        <ul className="messages">
                            <li className="message appeared left">
                                <div className="avatar"></div>
                                <div className="text_wrapper">
                                    <div className="text">Хэй! Как тебя зовут?</div>
                                </div>
                            </li>
                            <li className="message appeared right">
                                <div className="avatar"><img src="./avatar.jpg" className="ava_me" alt="me"/></div>
                                <div className="text_wrapper">
                                    <div className="text">Привет! Для друзей - Илья.</div>
                                </div>
                            </li>
                            <li className="message appeared left">
                                <div className="avatar"></div>
                                <div className="text_wrapper">
                                    <div className="text">Приятно познакомиться. Я Алиса.</div>
                                </div>
                            </li>
                            <li className="message appeared right">
                                <div className="avatar"><img src="./avatar.jpg" className="ava_me" alt="me"/></div>
                                <div className="text_wrapper">
                                    <div className="text">Красивое имя.</div>
                                </div>
                            </li>
                            <li className="message appeared left">
                                <div className="avatar"></div>
                                <div className="text_wrapper">
                                    <div className="text">Давай перейдем на ты.</div>
                                </div>
                            </li>
                            <li className="message appeared left">
                                <div className="avatar"></div>
                                <div className="text_wrapper">
                                    <div className="text">На каком направлении обучаешься?</div>
                                </div>
                            </li>
                            <li className="message appeared right">
                                <div className="avatar"><img src="./avatar.jpg" className="ava_me" alt="me"/></div>
                                <div className="text_wrapper">
                                    <div className="text">На 2 курсе прикладной информатики.</div>
                                </div>
                            </li>
                            <li className="message appeared right">
                                <div className="avatar"><img src="./avatar.jpg" className="ava_me" alt="me"/></div>
                                <div className="text_wrapper">
                                    <div className="text">В финансовом университете при правительстве РФ.</div>
                                </div>
                            </li>
                            <li className="message appeared left">
                                <div className="avatar"></div>
                                <div className="text_wrapper">
                                    <div className="text">О! Слышала о таком. Говорят самый лучший России.</div>
                                </div>
                            </li>
                            <li className="message appeared right">
                                <div className="avatar"><img src="./avatar.jpg" className="ava_me" alt="me"/></div>
                                <div className="text_wrapper">
                                    <div className="text">Так и есть!</div>
                                </div>
                            </li>
                            <li className="message appeared left">
                                <div className="avatar"></div>
                                <div className="text_wrapper">
                                    <div className="text">Чем вы там занимаетесь?</div>
                                </div>
                            </li>
                            <li className="message appeared right">
                                <div className="avatar"><img src="./avatar.jpg" className="ava_me" alt="me"/></div>
                                <div className="text_wrapper">
                                    <div className="text">Мы все используем git.</div>
                                </div>
                            </li>
                            <li className="message appeared right">
                                <div className="avatar"><img src="./avatar.jpg" className="ava_me" alt="me"/></div>
                                <div className="text_wrapper">
                                    <div className="text">Держи&nbsp;   <a className="waves-effect waves-light btn"
                                                             href="https://github.com/titovilya/barbershop-storage-service">Гитхаб</a></div>
                                </div>
                            </li>
                            <li className="message appeared left">
                                <div className="avatar"></div>
                                <div className="text_wrapper">
                                    <div className="text">Как жаль, что я робот и не могу учиться с вами.</div>
                                </div>
                            </li>
                        </ul>
                        <div className="bottom_wrapper clearfix">
                            <div className="message_input_wrapper"><input className="message_input"
                                                                          placeholder="Type your message here..."/>
                            </div>
                            <div className="send_message">
                                <div className="icon"></div>
                                <div className="text">Send</div>
                            </div>
                        </div>
                    </div>
                    <div className="message_template">
                        <li className="message">
                            <div className="avatar"></div>
                            <div className="text_wrapper">
                                <div className="text"></div>
                            </div>
                        </li>
                    </div>
                </Route>
            </Switch>
        );
    }
}
