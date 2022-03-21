// import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';
import Watch from './components/Watch/Watch';
// import DeviceDetail from './components/DeviceDetail/DeviceDetail';

function App() {
  return (
    <div className="App">

      <Device name="Laptop" price="56000"></Device>
      <Watch></Watch>

    </div>
  );
}

export default App;
