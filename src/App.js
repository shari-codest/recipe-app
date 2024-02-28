import { RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar";
import Recipe from "./components/pages/recipe";
import Recipes from "./components/pages/recipes"; 

const router = ([
  {path:"/", element:<Recipes /> },
  {path: "/recipes", element: <Recipes /> },
  {path: "/recipes/:id", element: <Recipe /> }
]);


function App() {
  return (
    <>
    <Navbar/>
    <RouterProvider router={router} />
    </>
  );
}

export default App;