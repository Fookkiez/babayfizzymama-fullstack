import Login from '../components/Login/Login'
import Album from '../components/Album/Album';
import SignUp from '../components/Register/SignUp';
import App from '../App';

const routes = [
    // {
    //   path: "/",
    //   element: <App />,
    // },
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