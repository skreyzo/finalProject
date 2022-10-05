<<<<<<< HEAD
import Footer from './pages/footer/Footer';
import Main from './navigate/Main';
import { BrowserRouter } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth={false} disableGutters={true}
        sx={{
          className: 'footer',
          maxWidth: '1200px',
          mx: "auto",
          px: '10px'
        }}>
        <Box sx={{
          display: 'flex',
          minHeight: '100vh',
          flexDirection: 'column',
          backgroundColor: '#808080',
        }}>
          <Box sx={{
            flexShrink: 1,
            flexGrow: 1,
            flexBasis: 'auto',
          }}>
            <Main />
          </Box>
          <Footer sx={{}} />
        </Box>
      </Container>
    </BrowserRouter>
=======
import Footer from "./pages/footer/Footer";
import Main from "./navigate/Main";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
        <Footer />
      </BrowserRouter>
    </Provider>
>>>>>>> origin/develop
  );
}

export default App;