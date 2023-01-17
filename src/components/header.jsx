import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import { users } from "../api";
function Header() {
    const local = localStorage.getItem('token');
    // if(local == null){
    //     window.location.href = '/';
    // }

    const [userProperty, setUserProperty] = useState(null);
    const userDetails = () => {
        const user = users.filter(i => i.id == local);
        if (user.length > 0) {
            setUserProperty(user[0]);
        }
    }
    const Logout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    }
    useEffect(() => {
        userDetails();
    }, [])
    return (
        <div>
            <div className="row">
                <div className="col-lg-12 header">
                    <div className="row">
                        <div className="col-6">
                            <a href="/"> <h2 className="href" >TEST ONLINE</h2></a>
                        </div>

                        <div className=" col-6 test">
                            <div className="row">
                                <div className="col-6 col-md-10 mt-3 d-flex justify-content-end">

                                <div className="col-3">
                                    {userProperty != null ?
                                        <img src={userProperty.avatar} width="30px" height="30px"></img>
                                        : <></>
                                    }

                                    <a href="/profil">
                                        {userProperty != null ?
                                            <>
                                                {userProperty.login}
                                            </>
                                            :
                                            <>


                                            </>

                                        }</a>
                                </div>
                                </div>
                                <div className="col-6 col-md-2">



                                    {local == null ?
                                        <>
                                            <a href="/vxod" ><h4 className="href" >вход</h4></a>
                                        </>
                                        :
                                        <>



                                            <a href="#" onClick={Logout}><h4 className="href">выйти</h4></a>

                                        </>



                                    }
                                </div>
                            </div>





                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}
export default Header;

