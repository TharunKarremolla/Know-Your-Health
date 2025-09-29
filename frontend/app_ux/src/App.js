import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
function App() {
  return (
    <div className="App">
    
     
      <Router>
         <Navbar />
        <Routes>
          <Route path='/' element={<Main />}>
          </Route>
          <Route path='/Login' element={<Login />}></Route>
            <Route path='/Register' element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
