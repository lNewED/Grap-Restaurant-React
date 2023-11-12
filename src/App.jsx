import { BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Restaurant from './pages/Restaurant';
import Add from './pages/Add';
import Search from './pages/Search';
import Navbar from './component/Navbar';
import Update from './pages/Update';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import Logout from './pages/Logout'
import { AuthProvider } from './context/AuthContext';



function App() {


  return (
    <BrowserRouter>
    <AuthProvider>
    <Navbar/>
    <div className='App'>
    <Routes>
      <Route path='/' element={<Restaurant />}/>
      <Route index element={<Restaurant/>}/>
      <Route path='/Add' element={<Add />}/>
      <Route path='/Search' element={<Search />}/>
      <Route path='/signin' element={<Signin />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route path='logout'  element={<Logout/>} />
      <Route path='/UpdateJung/:restaurantId'element={<Update />} />
      </Routes>
      </div>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;