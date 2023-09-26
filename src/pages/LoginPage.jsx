import { toast } from "react-toastify";
import Cookies from "js-cookie";

import request from "../server";
import { TOKEN } from "../constants";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import '../css/Login.scss';

const LoginPage = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const login = async () => {
    try {
      let user = {
        username: "abdulaziz100",
        password: "1234567",
      };
      let {
        data: { token },
      } = await request.post("auth/login", user);
      Cookies.set(TOKEN, token);
      setIsAuthenticated(true);
      navigate("/my-blogs");
    } catch (err) {
      toast.error("Error");
    }
  };
  return (
    <div className='login'>
      <div className='login-item'>
        <h2>LoginPage</h2>
          <div className="forms">
              <form>
                      <div className=" mb-5">
                          <label htmlFor="userName"></label>
                          <input className="form-control" required type="text" id="userName" name="userName" placeholder="Abdulazizprogrammer"/>
                      </div>
                      <div className=" mb-5">
                          <label htmlFor="password"></label>
                          <input className="form-control" required type="password" id="password" name="password" placeholder="Password"/>
                      </div>
                      <div className="mb-5">
                            <button onClick={login}>Login</button>
                      </div>
              </form>
            </div>
      </div>
    </div>
  );
};

export default LoginPage;
