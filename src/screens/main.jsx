import { tests } from "../api";
import Footer from "../components/footer";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Commetn from "../components/commetn"


const Main = () => {
    const test = tests;
    return (
        <div>
            <Header />
            <div className="row">
                <div className="col-lg-3">
                    <Sidebar />
                </div>
                <div className="col-lg-9 colum">
                    <div className="row">
                        <h2 className="text-white">Популярные тесты</h2>
                        {test.map((item) =>
                            <div className="col-lg-3 ">
                                <div class="card" className="scard">
                                    <img src={item.photo} class="card-img-top" alt="" />
                                    <div class="card-body">
                                        <h5 class="card-title text-white">{item.title}</h5>
                                        <p class="card-text">{item.description}</p>
                                        <a href={"/scrin/" + item.id + "/" + 0} class="btn btn-secondary mb-3">пройти тест</a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            
           
         
              
                    <div className="col-3">
                        
                    </div>
                    <div className="col-lg-9 ">
                        <Commetn />
                  
                </div>
           </div>

            <Footer />
        </div>

    );
}
export default Main;