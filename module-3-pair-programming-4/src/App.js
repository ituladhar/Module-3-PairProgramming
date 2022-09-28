import './App.css';
import "./glitch.css"

import HeaderComponent from './components/HeaderComponent';
import MainComponent from './components/MainComponent'
import FooterComponent from './components/FooterComponent'


function App() {

 return (
  <div className='content'>
    <HeaderComponent />
    <MainComponent />
    <FooterComponent />
  </div>
  );
}

export default App;
