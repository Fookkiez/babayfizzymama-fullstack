import Login from '../pages/Login/Login'
import Album from '../pages/Album/Album';
import SignUp from '../pages/Register/SignUp';
import App from '../App';

const routes = [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/hello",
      element: <h1>Fookkie</h1>,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/album",
      element: <Album />,
    },
    {
      path: "/signUp",
      element: <SignUp />,
    },
  ]
export default routes;