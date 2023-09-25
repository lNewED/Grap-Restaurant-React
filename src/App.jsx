import { BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Restaurant from './pages/Restaurant';
import Add from './pages/Add';
import Search from './pages/Search';
import Navbar from './component/Navbar';
import Update from './pages/Update';

function App() {


  return (
    <BrowserRouter>
    <div className='App'>
    <Navbar> </Navbar>
    <Routes>
      <Route path='/' element={<Restaurant />}/>
      <Route path='/add' element={<Add />}/>
      <Route path='/search' element={<Search />}/>
      <Route path='/UpdateJung/:restaurantID' element={<Update />} />
    </Routes>
    </div>
    </BrowserRouter>
    

  );
}

export default App;