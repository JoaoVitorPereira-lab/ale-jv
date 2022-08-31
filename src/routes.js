import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home         from './pages/home'
import Componentes  from './pages/componentes'
import Componentes2 from './pages/componentes2'
import Props        from './pages/props'
import VE           from './pages/VE'

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/componentes' element={<Componentes />} />
                <Route path='/componentes2' element={<Componentes2 />} />
                <Route path='/props' element={<Props />} />

                <Route path='/ve' element={<VE />} />
            </Routes>
        </BrowserRouter>
    );
};