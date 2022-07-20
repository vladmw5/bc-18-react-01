import { useDispatch } from "react-redux";
import { authGoogle } from "../../redux/login/login-operation";

const Login = () => {
  const dispatch = useDispatch();
  const authGoogleClick = () => {
    dispatch(authGoogle());
  };
  return (
    <div>
      <button type="button" onClick={authGoogleClick}>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
