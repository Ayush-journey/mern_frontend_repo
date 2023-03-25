import './App.css';
import Header from './Component/Header'
import Subheader from './Component/Subheader';
import Deliverypage from './Component/Deliverypage';
import Diningpage from './Component/Diningpage'
import Nighlifepage from './Component/Nightlifepage'
function App() {
  return (
    <div className='App'>
      <Header />
      <Subheader />
      {/* <Deliverypage /> */}
      {/* <Diningpage /> */}
      <Nighlifepage />
    </div>

  );
}

export default App;
