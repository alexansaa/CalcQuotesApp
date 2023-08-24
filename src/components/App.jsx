import { Routes, Route } from 'react-router-dom';

import Home from '@/routes/Home';
import Calculator from '@/routes/Calculator';
import Quotes from '@/routes/Quotes';

import Layout from '@/components/Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="calculator" element={<Calculator />}/>
        <Route path="quotes" element={<Quotes />}/>
      </Route>
    </Routes>
  );
};

export default App;
