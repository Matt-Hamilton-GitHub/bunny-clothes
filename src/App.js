import './App.css';
import {Routes, Route} from 'react-router-dom'


//components
import Navigation from './routes/Navigation';
import Home from './routes/home/home.component';
import Error from './routes/Error';
import Authentication from './routes/authentication/authentication';
import Shop from './routes/shop/Shop';
import CheckOut from './components/checkout/CheckOut';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication/>}/>
        <Route path='shop/*' element={<Shop/>}/>
        <Route path='check-out' element={<CheckOut />}/>
      </Route>
      {/* <Route path='*' element={<Error />} /> */}
    </Routes>
  );
}

export default App;

