import SignUp from '../components/auth/SignUp';
import RestorePassword from '../components/auth/RestorePassword';
import { HashRouter, Route, Routes } from 'react-router-dom';
import SignIn from '../components/auth/SignIn';

function App() {
  return (
    <>
      <HashRouter basename='/simple-react-auth'>
        <Routes>
          <Route path='/' index element={<SignIn></SignIn>}></Route>
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
