import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";

import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import store from "./utils/store";
import Head from "./components/Head";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="w-screen h-screen overflow-x-hidden">
        <div className="w-[90%] h-[100%]">
          <Head />
          <RouterProvider router={appRouter} />
        </div>
        {/**
       * Head component
       * Body
       *   Sidebar
       *     MenuItems
       *   MainContainer
       *      ButtonsList
       *      VideoContainer
       *         VideoCard
       
       */}
      </div>
    </Provider>
  );
}

export default App;
