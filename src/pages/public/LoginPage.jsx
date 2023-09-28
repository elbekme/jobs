// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";

// import request from "../../server";
// import { TOKEN, ROLE } from "../../constants";
// import { AuthContext } from "../../context/AuthContext";
// import '../../css/Login.scss';
// import { message } from "antd";

// const LoginPage = () => {
//   const { setIsAuthenticated, setRole } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const login = async () => {
//     try {
//       let user = {
//         username: "abdulaziz",
//         password: "1234567",
//       };
//       let {
//         data: { token, role },
//       } = await request.post("auth/login", user);
//       if (role === "user") {
//         navigate("/my-blogs");
//       } else if (role === "admin") {
//         navigate("/dashboard");
//       }
//       Cookies.set(TOKEN, token);
//       Cookies.set(ROLE, role);
//       setIsAuthenticated(true);
//       setRole(role);
//     } catch (err) {
//       message.error("Error");
//     }
//   };
//   return (
//     <div className='login'>
//       <div className='login-item'>
//         <h2>LoginPage</h2>
//           <div className="forms">
//               <form>
//                       <div className=" mb-5">
//                           <label htmlFor="userName"></label>
//                           <input className="form-control" required type="text" id="userName" name="userName" placeholder="Name"/>
//                       </div>
//                       <div className=" mb-5">
//                           <label htmlFor="password"></label>
//                           <input className="form-control" required type="password" id="password" name="password" placeholder="Password"/>
//                       </div>
//                       <div className="mb-5">
//                             <button onClick={login}>Login</button>
//                       </div>
//               </form>
//             </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { message } from "antd";

import request from "../../server";
import { TOKEN, ROLE } from "../../constants";
import { AuthContext } from "../../context/AuthContext";
import "../../css/Login.scss";

const LoginPage = () => {
  const { setIsAuthenticated, setRole } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const login = async () => {
    try {
      let user = {
        username: username,
        password: password,
      };
      let {
        data: { token, role },
      } = await request.post("auth/login", user);
      if (role === "user") {
        navigate("/my-blogs");
      } else if (role === "admin") {
        navigate("/dashboard");
      }
      Cookies.set(TOKEN, token);
      Cookies.set(ROLE, role);
      setIsAuthenticated(true);
      setRole(role);
    } catch (err) {
      message.error("Error");
    }
  };

  return (
    <div className="login">
      <div className="login-item">
        <h2>LoginPage</h2>
        <div className="forms">
          <form>
            <div className=" mb-5">
              <label htmlFor="userName"></label>
              <input
                className="form-control"
                required
                type="text"
                id="userName"
                name="userName"
                placeholder="Name"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className=" mb-5">
              <label htmlFor="password"></label>
              <input
                className="form-control"
                required
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="mb-5">
              <button type="button" onClick={login}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
