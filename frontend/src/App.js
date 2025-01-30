import Question from './Components/AddComponent/Question';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home/Home';

function App() {
  return (
    <>
       <BrowserRouter>
       <Navbar></Navbar>
       <Routes>
        <Route path='/SpeakX' element={<Home/>}></Route>
       <Route path={"/add"} element={<Question></Question>}></Route>
       
       </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
