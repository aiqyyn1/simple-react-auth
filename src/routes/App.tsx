import SignUp from '../components/auth/SignUp';
import RestorePassword from '../components/auth/RestorePassword';
import { HashRouter, Route, Routes, BrowserRouter } from 'react-router-dom';
import SignIn from '../components/auth/SignIn';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' index element={<SignIn></SignIn>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route
            path='/reset'
            element={<RestorePassword></RestorePassword>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
