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
                    {/*<div className="container">*/}
                    {/*    <div className="row">*/}
                    {/*        <div className="col s7">*/}
                    {/*            <h5> Эта информационно-справочная система выполнена студентом второго курса Финансового университета<br />*/}
                    {/*    Титовым Ильей ПИ19-1</h5>*/}

                    {/*            <a className="waves-effect waves-light btn"*/}
                    {/*                href="https://github.com/titovilya/barbershop-storage-service">Гитхаб</a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="container">*/}
                    {/*    <div className="row">*/}
                    {/*        <div className="col s12 m6 l4 center-align">*/}
                    {/*            <div className="section"><img className="circle" alt="My Photo"*/}
                    {/*                                          src="./avatar.jpg" height={"250px"}/></div>*/}
                    {/*        </div>*/}
                    {/*        <div className="col s12 m6 l8 bg-white py-1">*/}
                    {/*            <div className="section px-1 text-s-center">*/}
                    {/*                <h1 className="mb-5 font-special">Титов Илья</h1>*/}
                    {/*                <a href="mailto:example@example.com">*/}
                    {/*                    <i className="fa fa-2x fa-envelope-square"*/}
                    {/*                                                        aria-hidden="true"></i></a> <a*/}
                    {/*                href="https://www.linkedin.com/"><i*/}
                    {/*                className="fa fa-2x fa-linkedin-square ml-2 mr-2" aria-hidden="true"></i></a> <a*/}
                    {/*                href="https://github.com/"><i className="fa fa-2x fa-github-square"*/}
                    {/*                                              aria-hidden="true"></i></a></div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="row">*/}
                    {/*        <div className="col s12 m6 l4">*/}
                    {/*            <h2 className="font-special text-s-left text-lg-right">Education</h2>*/}
                    {/*        </div>*/}
                    {/*        <div className="col s12 m6 l8 bg-white">*/}
                    {/*            <div className="section">*/}
                    {/*                <h3>Финансовый университет при правительстве Российской Федерации</h3>*/}
                    {/*                <ul className="list-unstyled">*/}
                    {/*                    <li><strong>Bachelor</strong> <small className="accent">2019-2023</small>*/}
                    {/*                    </li>*/}
                    {/*                </ul>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="row">*/}
                    {/*        <div className="col s12 m6 l4">*/}
                    {/*            <div className="section px-1">*/}
                    {/*                <h2 className="font-special text-s-left text-lg-right">Experience</h2>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="col s12 m6 l8 bg-white">*/}
                    {/*            <div className="section px-1">*/}
                    {/*                <h3>Company 1</h3>*/}
                    {/*                <p><strong>Position</strong> <small className="accent">Date to Date</small></p>*/}
                    {/*                <ul>*/}
                    {/*                    <li>Description</li>*/}
                    {/*                    <li>Description</li>*/}
                    {/*                    <li>Description</li>*/}
                    {/*                    <li>Description</li>*/}
                    {/*                    <li>Description</li>*/}
                    {/*                </ul>*/}
                    {/*                <h3>Company 2</h3>*/}
                    {/*                <p><strong>Position 1</strong> <small className="accent">Date to Date</small> <br/>*/}
                    {/*                    <strong>Position 2</strong> <small className="accent">Date to Date</small></p>*/}
                    {/*                <ul>*/}
                    {/*                    <li>Description</li>*/}
                    {/*                    <li>Description</li>*/}
                    {/*                    <li>Description</li>*/}
                    {/*                    <li>Description</li>*/}
                    {/*                    <li>Description</li>*/}
                    {/*                </ul>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="row">*/}
                    {/*        <div className="col s12 m6 l4">*/}
                    {/*            <h2 className="font-special text-s-left text-lg-right">Skills</h2>*/}
                    {/*        </div>*/}
                    {/*        <div className="col s12 m6 l8 bg-white">*/}
                    {/*            <div className="section">*/}
                    {/*                <dl>*/}
                    {/*                    <dt className="col s12 m4 l3">Category</dt>*/}
                    {/*                    <dd className="col s12 m8 l9">Skill 1, Skill 2, Skill 3, Skill 4</dd>*/}
                    {/*                    <dt className="col s12 m4 l3">Category</dt>*/}
                    {/*                    <dd className="col s12 m8 l9">Skill 1, Skill 2, Skill 3, Skill 4</dd>*/}
                    {/*                    <dt className="col s12 m4 l3">Category</dt>*/}
                    {/*                    <dd className="col s12 m8 l9">Skill 1, Skill 2, Skill 3, Skill 4</dd>*/}
                    {/*                    <dt className="col s12 m4 l3">Category</dt>*/}
                    {/*                    <dd className="col s12 m8 l9">Skill 1, Skill 2, Skill 3, Skill 4</dd>*/}
                    {/*                    <dt className="col s12 m4 l3">Category</dt>*/}
                    {/*                    <dd className="col s12 m8 l9">Skill 1, Skill 2, Skill 3, Skill 4</dd>*/}
                    {/*                </dl>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*</div>*/}
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
