import { useEffect } from "react";
import { useState } from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";
import Commetn from "../components/commetn"

function Rezultat() {
    const params = useParams();
    const test_id = params.id;
    const [text, setText] = useState(null);
    const points = localStorage.getItem('points');
    const TextPoints = () => {
        if (points < 40) {
            setText("Пока плохо, но зато узнали много нового и интересного.")
        }
        else if (points > 40) {
            setText("Вы делаете определенные успехи.")
        }
        if (points < 70) {
            setText("Не плохо,надо еще заняться.")
        }
        else if (points > 80) {
            setText("молодец")
        }

    }
    const ClearPoints = () => {
        localStorage.removeItem('points');
        window.location.href = "/";
    }
    const AgainTest = () => {
        localStorage.removeItem('points')
        window.location.href = "/scrin/" + test_id + "/0"
    }
    useEffect(() => {
        TextPoints();
    }, [])
    return (
        <div>
            <Header />
            <div className="col-lg-12">

            <div className="row">
                <div className="col-lg-3">
                    <Sidebar />
                </div>

                <div className="col-lg-6 colum">
                    <h3 className="text-white">Ваш результат:</h3>
                    <h5 className="text-white"> {localStorage.getItem('points')}  Баллов</h5>
                    {text}
                    <br></br>
                    <button className="buton" onClick={ClearPoints} ><b>выйти</b></button>

                    <div className="col-3">
                        <button className="buton" onClick={AgainTest} > пройти тест<br></br> еще раз</button>
                    </div>
                </div>
                <div className="col-lg-3 colum">
                    реклама
                </div>


                <div className="col-3"></div>
                <div className="col-lg-9 ">
                    <Commetn />
                </div>
            </div>
            <Footer />
            </div>
        </div>
    )
}
export default Rezultat;
