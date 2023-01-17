import { useState } from "react";
import { useParams } from "react-router-dom";
import { questions } from "../api";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import {message} from "antd";

function Scrin() {







    const params = useParams();
    const test_id = params.id;
    const question_id = params.q;
    const [index,setIndex] = useState(question_id);
    const test = questions.filter(i => i.test_id == test_id);
    const local = localStorage.getItem('points');
    if(test[question_id] == undefined){
        window.location.href = "/rezultat/"+test_id;
    }
    const Check = (value) => {
        if (value == true) {
            if(local != null){
                localStorage.setItem('points', (parseInt(local)+10))
            }else{
                localStorage.setItem('points', 10);
            }
            message.success('Ответ правильный!');
            setTimeout(()=>{window.location.href="/scrin/"+test_id+"/"+(parseInt(question_id)+1);},2000);
        } else {
            message.error('Ответ не правильный!');
            setTimeout(()=>{window.location.href="/scrin/"+test_id+"/"+(parseInt(question_id)+1);},2000);
        }
    }
    return (
        <div>
            <Header />
            {test ? 
            <div className="row">
                <div className="col-lg-3">
                    <Sidebar />
                </div>              
                <div className="col-lg-7 colum ">
                    <div className="col-12 scrin">
                        <h4 className="href">{test[index].title}</h4>
                        
                    </div>
                    <div className="col-12 scrin">
                        <img src={test[index].photo}></img>
                        <h3 className="href">{test[index].description}</h3>
                        <h5 className="href">Варианты ответов:</h5>
                        {test[index].answers.map((item) =>
                            <>
                                <input type="radio" name="radio" className="but" onChange={() => {Check(item.status)}}></input><b>{item.title}</b><br/>
                            </>
                        )}
                    </div><hr></hr>
                    
                </div>
                
                <div className="col-lg-2 colum">
                    реклама
                </div>               
            </div>
            :<>loading</>
            }
            
            <Footer/>
        </div>
    );
}
export default Scrin;