import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import Footer from './components/Footer';
import IphoneMock from './components/IphoneMock';
import InformationSide from './components/InformationSide';


function App() {
  return (
    <div className="App">

      <IphoneMock/>
      <InformationSide/>
 
    </div>
  );
}

export default App;
