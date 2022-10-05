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
  );
}

export default App;
