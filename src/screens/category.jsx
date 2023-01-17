import { useState } from "react";
import { useParams } from "react-router-dom";
import { tests } from "../api";
import Footer from "../components/footer";

import Header from "../components/header";
import Sidebar from "../components/sidebar";
const Category = () => {
    const params = useParams();
    const category_id = params.id;
    const category = tests.filter(i => i.category_id == category_id);
    console.log(category);


    return (
        <div>
            <Header />
            <div className="row">
                <div className="col-lg-3">
                    <Sidebar />
                </div>


                <div className="col-lg-7 colum">
                    <div className="row">
                        {category.map((item) =>
                            <div className="col-lg-4">
                                <div class="card" className="scard">
                                    <img src={item.photo} class="card-img-top" alt="" />
                                    <div class="card-body">
                                        <h5 class="card-title text-white">{item.title}</h5>
                                        <p class="card-text">{item.description}</p>
                                        <a href={"/scrin/" + item.id + "/" + 0} class="btn btn-secondary mb-3">пройти тест</a>
                                    </div>
                                </div>


                            </div>

                        )}</div>


                </div>
                <div className="col-lg-2 colum">реклама</div>
            </div>
            <Footer />

        </div>
    )

}
export default Category;
