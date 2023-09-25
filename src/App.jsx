import { BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Restaurant from './pages/Restaurant';
import Add from './pages/Add';
import Search from './pages/Search';
import Navbar from './component/Navbar';
import Update from './pages/Update';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';

function App() {


  return (
    <BrowserRouter>
    <div className='App'>
    <Navbar> </Navbar>
    <Routes>
      <Route path='/' element={<Restaurant />}/>
      <Route path='/Add' element={<Add />}/>
      <Route path='/Search' element={<Search />}/>
      <Route path='/UpdateJung/:restaurantId' element={<Update />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
    </div>
    </BrowserRouter>
    

  );
}

export default App;