import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Advertising  from '../advertising/advertising'
import Error  from '../error/error'
import Welcome  from '../jordan/pages/welcome/welcome'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default (props: any)=>{
  return (
    <BrowserRouter>
      <ToastContainer autoClose={5000} theme='dark' hideProgressBar={true} />
      <Routes>
        <Route path="/"  element={<Advertising/>} />
        <Route path="/welcome" element={<Welcome/>} />
        <Route path="/*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}
