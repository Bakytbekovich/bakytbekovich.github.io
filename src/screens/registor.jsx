import Header from "../components/header";
function Registor() {
    return (

        <div className="regg" style={{ height: "1000px" }}>
            <div className="col-lg-12">
                <div className="row">                       
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-1"></div>
                                    <div className="col-lg-10">
                                        <h3 className="regis ">Регистрация</h3>
                                        <h6> Имя:<input type="text" placeholder="имя" className="form-control"></input></h6>
                                        <h6> Фамилия:<input type="text" placeholder="фамилия" className="form-control"></input></h6>
                                        <h6> Логин:<input type="text" placeholder="логин" className="form-control"></input></h6>
                                        <h6> Пароль:<input type="text" placeholder="пароль" className="form-control"></input></h6>
                                        <div className="col-lg-12 voit">
                                            <button className="vx"><b>Зарегистрироваться</b></button>
                                        </div>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                    
                    
                </div>
            </div>
        </div>


    )
}
export default Registor;
