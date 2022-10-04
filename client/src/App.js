import './App.css';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>    
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
