import './App.css';
import CardCollection from './components/CardCollection';
import Header from './components/Header';
import MainComponent from './components/MainComponent';

function App() {

  return (
    <div className="App">
    <Header />
    <MainComponent />
    <CardCollection />
    </div>
  );
}

export default App;
