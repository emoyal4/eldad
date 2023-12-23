import "./App.scss";
import Header from "./components/Header";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainList from "./pages/MainList";
import StatDetails from "./pages/StatDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainList />,
  },
  {
    path: "/details:statId",
    element: <StatDetails />,
  },
  {
    path: "/details",
    element: <StatDetails />,
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
