import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { AuthContext } from "../context/AuthContext";
import { TOKEN } from "../constants";

import '../css/Account.scss';

const AccountPage = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = () => {
    setIsAuthenticated(false);
    Cookies.remove(TOKEN);
    navigate("/");
  };
  return (
    <div className="account">
      <div className="account-item">
        <h2>AccountPage</h2>
        <div className="forms">
          <form>
            <div className=" mb-4">
                      <label htmlFor="firstName"></label>
                      <input className="" required type="text" id="firstName" name="firstName" placeholder="Abdulaziz"/>
                  </div>
                  <div className=" mb-4">
                      <label htmlFor="lastName"></label>
                      <input className="form-control" required type="text" id="lastName" name="lastName" placeholder="Programmer"/>
                  </div>
                  <div className=" mb-5">
                      <label htmlFor="userName"></label>
                      <input className="form-control" required type="text" id="userName" name="userName" placeholder="Abdulazizprogrammer"/>
                  </div>
                  <div className=" mb-5">
                      <label htmlFor="password"></label>
                      <input className="form-control" required type="password" id="password" name="password" placeholder="Password"/>
                  </div>
                  <div className=" mb-5">
                      <label htmlFor="password"></label>
                      <input className="form-control" required type="password" id="password" name="password" placeholder="Confirm password"/>
                  </div>
                  <div className=" mt-5">
                      <Link href="./pages/login.html">
                          <input  value="Save" className="btn" type="submit"/>
                      </Link>
                  </div>
                  <div>
                      <button className="logout" onClick={logout}>Logout</button>
                  </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default AccountPage;
