import './App.css';
import {Routes, Route} from 'react-router-dom'

//components
import Navigation from './routes/Navigation';
import Home from './routes/home/home.component';
import Error from './routes/Error';
import Authentication from './routes/authentication/authentication';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/auth' element={<Authentication/>}/>
        <Route path='/shop' element={<h1>SHOP</h1>}/>
      </Route>
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default App;

