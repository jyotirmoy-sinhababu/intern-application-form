import './App.css';

import Home from './pages/home/Home';
import Ctn from './pages/container/Ctn';

import { Routes, Route } from 'react-router-dom';
import DisplayMsg from './component/DisplayMsg';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Ctn />}>
          <Route index element={<Home />} />
          <Route path='/msg' element={<DisplayMsg />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
