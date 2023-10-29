import Login from "../pages/Login/Login";
import Album from "../pages/Album/Album";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";
import App from "../App";
import { Result, Button } from 'antd';

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/home",
  //   element: <Home />,
  // },
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
  {
    path: "*",
    element: (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button
            type="primary"
            onClick={() => {
              window.history.back();
            }}
          >
            Back
          </Button>
        }
      />
    ),
  },
];
export default routes;
