import Header from "../components/header";
import { useState } from 'react';
import { message } from "antd";
import { users } from "../api";
const Enter = () => {
    const [login, setlogin1] = useState();
    const [password, setpassword2] = useState();


    const SingIn = () => {
        if (login != "" && password != "") {
            const user = users.filter(i => i.login == login && i.password == password);
            if (user.length > 0) {
                localStorage.setItem('token', user[0].id);
                window.location.href = "/";

                message.success('Добро пожаловать');
            }
            else {
                message.error('Не правильный логин или пароль');
            }
        } else {
            message.warning('Заполните поля');

        }

    }

    return (

        <div className="regg" style={{ height: "1000px" }}>
            <div className="col-lg-12">
                <div className="row">
                    <div className=" box">
                        <div className="col-12 box1 mt-5">
                            <h3><b>ONLINE TEST</b></h3>
                        </div>

                        <div className="col-lg-12 mt-3">
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-8">
                                    <input type="text" className="form-control" placeholder="E-mail" onChange={(e) => { setlogin1(e.target.value); }} />
                                </div>
                                <div className="col-2"></div>

                            </div>
                        </div>
                        <div className="col-lg-12 mt-3">
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-8">
                                    <input type="text" className="form-control" placeholder="пароль" onChange={(e) => { setpassword2(e.target.value); }} />
                                </div>
                                <div className="col-2"></div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="col-6 hreff">
                                        <input type="checkbox"></input>запомнить меня
                                    </div>
                                    <div className="col-6 zab ">
                                        <a href="" className="reg">забыли пароль?</a>
                                    </div>
                                </div>


                            </div>
                            <div className="col-2"></div>
                        </div>


                        <div className="col-12 voit mt-3">
                            <button className="vx " onClick={SingIn}>войти</button>
                        </div>
                        <div className="col-12 voit mt-3">
                            Нет аккаунта?<br></br>
                            Пожалуйста,пройдите<a href="/registor" className="reg"> регистрацию</a>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}
export default Enter;