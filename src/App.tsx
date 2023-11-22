// import { useLocation, useRoutes } from "react-router-dom";

import SignIn from "./scenes/auth/SignIn"
import SignUp from "./scenes/auth/SignUp"
import Footer from "./scenes/components/common/Footer"
import Nav from "./scenes/components/common/Nav"
import MainCard from "./scenes/components/common/cards/MainCard"
import NewsLetter from "./scenes/components/common/cards/NewsLetter"
import SmallCard from "./scenes/components/common/cards/SmallCard"
import CreateBlog from "./scenes/createBlog/CreateBlog"
import PostPage from "./scenes/postPage/PostPage"

// import Home from "./scenes/Home/Home.tsx";

// const App = () => {
//   const location = useLocation();

//   const routes = useRoutes([
//     {
//       path: "/signup",
//       // element: <Signup />,
//     },
//     {
//       path: "/login",
//       // element: <Login />,
//     },
//     {
//       path: "/",
//       element: <Home />,
//     },
//   ]);

//   if (location.pathname === "/signup" || location.pathname === "/login") {
//     return routes;
//   }
//   return <div className="w-screen">{routes}</div>;
// };

// export default App;



const App = () => {
  return (
    <>
     <Nav />

     {/* <SignUp />
     <SignIn /> */}

     {/* <CreateBlog /> */}
     {/* <MainCard /> */}
     {/* <SmallCard /> */}
     {/* <NewsLetter /> */}

     <PostPage />

     <Footer />
    </>
  )
}

export default App