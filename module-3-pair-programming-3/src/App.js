import { BrowserRouter } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
      <Footer/>
    </div>
    
  );
}

export default App;
