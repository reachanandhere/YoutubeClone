import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: '/',
          element: <MainContainer />
        },
        {
          path: '/watch',
          element: <WatchPage />
        },

      ]
    },
    
  ]);

  return (
    <Provider store={appStore}>
      <div>
        <header>
          <Header />
        </header>
        <section>
         <RouterProvider router={appRouter} />
        </section>
      </div>
    </Provider>
  );
}

export default App;
