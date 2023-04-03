import './App.css';
import Header from './Component/Header'
import Subheader from './Component/Subheader';
import Deliverypage from './Component/Deliverypage';
import Diningpage from './Component/Diningpage';
import Nighlifepage from './Component/Nightlifepage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Subheader />
        <Routes>
          <Route path='/' element={<Deliverypage />} />
          <Route path='/Delivery' element={<Deliverypage />} />
          <Route path='/Dining' element={<Diningpage />} />
          <Route path='/Nightlife' element={<Nighlifepage />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
