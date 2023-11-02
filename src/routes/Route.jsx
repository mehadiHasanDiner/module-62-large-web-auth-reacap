import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Category from "../Pages/Home/Category";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../Pages/News/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Category></Category>,
        loader: () => fetch("http://localhost:5000/news"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: <News></News>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);

export default router;
