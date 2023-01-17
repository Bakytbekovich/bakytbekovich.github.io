import './App.css';
import Main from './screens/main';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vxod from './screens/vxod';
import Registor from './screens/registor';
import Scrin from './screens/scrin';
import Rezultat from './screens/rezultat';
import Category from './screens/category';
import Footer from './components/footer';
import 'antd/dist/antd.css';
import Comments from './components/commetn';   
import Profil from './screens/profil' ;




function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
       
        <Route path='/' element={<Main/>}/>
        <Route path='/vxod' element={<Vxod/>}/>
        <Route path='/registor' element={<Registor/>}/>
        <Route path='/scrin/:id/:q' element={<Scrin/>}/>
        <Route path='/rezultat/:id' element={<Rezultat/>}/>
        <Route path='/category/:id'element={<Category/>}/>
        <Route path='/footer' element={<Footer/>}/>
        <Route path='/comments' element={<Comments/>}/>
        <Route path='/profil' element={<Profil/>}/>
       
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
