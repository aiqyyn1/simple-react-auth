import SignUp from '../components/auth/SignUp';
import RestorePassword from '../components/auth/RestorePassword';
import { HashRouter, Route, Routes } from 'react-router-dom';
import SignIn from '../components/auth/SignIn';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' index element={'Hello world'}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route
            path='/reset'
            element={<RestorePassword></RestorePassword>}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
