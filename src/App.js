import './App.scss';
import Home from './routes/home/home.components';
import {Routes, Route} from "react-router-dom";
import Navigation from './routes/navigation/navigation.component';
import Signin from './routes/signin/signin.component';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>} >
        <Route index element={<Home/>} />
        <Route path='sign-in' element={<Signin/>} />
      </Route>
    </Routes>  
  )
};



export default App;
