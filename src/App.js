import './App.css';
import './categories.styles.scss'
import {Routes, Route} from 'react-router-dom'

//components
import Navigation from './routes/Navigation';
import Home from './routes/home/home.component';
import Error from './routes/Error';
import SignIn from './routes/sign-in/sign-in.component';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/shop' element={<h1>SHOP</h1>}/>
      </Route>
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default App;

