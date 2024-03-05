import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <header>
          <Header />
        </header>
        <section>
          <Body />
        </section>
      </div>
    </Provider>
  );
}

export default App;
