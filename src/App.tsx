import { useLocation, useRoutes } from "react-router-dom";

import SignIn from "./scenes/auth/SignIn";
import SignUp from "./scenes/auth/SignUp";
import Footer from "./components/common/Footer";
import Nav from "./components/common/Nav";
import MainCard from "./components/common/cards/MainCard";
import NewsLetter from "./components/common/cards/NewsLetter";
import SmallCard from "./components/common/cards/SmallCard";
import CreateBlog from "./scenes/createBlog/CreateBlog";
import PostPage from "./scenes/postPage/PostPage";

import Home from "./scenes/Home/Home.tsx";

const App = () => {
  const location = useLocation();

  const routes = useRoutes([
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <SignIn />,
    },
    {
      path: "/create-blog",
      element: <CreateBlog />,
    },
    {
      // path: "/post/:id",
      path: "/post",
      element: <PostPage />,
    },
    {
      path: "/",
      element: <Home />,
    },
  ]);

  if (location.pathname === "/signup" || location.pathname === "/login") {
    return routes;
  }
  return <div className="w-screen">
    <Nav />
    {routes}
    <Footer />
    </div>;
};

export default App;

// const App = () => {
//   return (
//     <>
//       <Nav />
//       <SignUp />
//       <SignIn /> 
//       <CreateBlog />
//       <MainCard />
//       <SmallCard />
//       <NewsLetter />
//       <PostPage />
//       <Footer />
//     </>
//   );
// };

// export default App;
