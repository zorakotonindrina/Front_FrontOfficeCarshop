import { Route  , useLocation, Routes } from 'react-router-dom'
import Message from './page/Message';
import Login from './page/Login';
import Annonce from './page/Annonce';
import MonAnnonce from './page/MonAnnonce';
import MesAnnonces from './page/MesAnnonces';
import ListeFavoris from './page/ListeFavoris';
import Search from './page/Search';

function App() { 
  const location = useLocation()
  return (
    <Routes location={location} key={location.pathname}>
        <Route path='/' Component={Annonce}></Route>
        <Route path='/logout' Component={Login}></Route>
        <Route path='/firstpage' Component={Annonce}></Route>
        <Route path='/details/:id' Component={MonAnnonce}></Route>
        <Route path='/mesannonces' Component={MesAnnonces}></Route>
        <Route path='/monannonce' Component={MonAnnonce}></Route>
        <Route path='/search' Component={Search}></Route>
        <Route path='/fav' Component={ListeFavoris}></Route>
        <Route path='/message' Component={Message}></Route>
        <Route path='/deconnecter' Component={Login}></Route>
    </Routes>
  );
}

export default App;
