import Footer from './pages/footer/Footer';
import Main from './navigate/Main';
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
