import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Advertising  from '../advertising/advertising'
import Error  from '../error/error'
import Welcome  from '../jordan/pages/welcome/welcome'

export default (props: any)=>{
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Advertising/>} />
          <Route path="/welcome" element={<Welcome/>} />
          <Route path="/*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}
