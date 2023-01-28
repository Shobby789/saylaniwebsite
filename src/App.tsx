import Home from "./components/home/Home";
import About from "./components/about/About";
import Certification from "./components/certification/Certification";
import Contact from "./components/contact/Contact";
import Menu from "./components/navbar/Menu";
// import AllCourses from "./components/allcourses/AllCourses";
import type { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import AllCourses from "./components/allcourses/AllCourses";

function App() {
  let routes: RouteObject[] = [
    {
      path: "/",
      element: <Menu />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/AllCourses",
          element: <AllCourses />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/certification",
          element: <Certification />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ];

  let element = useRoutes(routes);
  return <div>{element}</div>;
}

export default App;
