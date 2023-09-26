
import { Link } from 'react-router-dom';
import '../css/Register.scss'
const RegisterPage = () => {
  return <div className="register">
    <div className="register-item">
      <h1>Register</h1>

      <div className="forms">
            <form className="col-6">
                <div className=" mb-4">
                    <label htmlFor="firstName"></label>
                    <input className="" required type="text" id="firstName" name="firstName" placeholder="Firstname"/>
                </div>
                <div className=" mb-4">
                    <label htmlFor="lastName"></label>
                    <input className="form-control" required type="text" id="lastName" name="lastName" placeholder="Lastname"/>
                </div>
                <div className=" mb-5">
                    <label htmlFor="userName"></label>
                    <input className="form-control" required type="text" id="userName" name="userName" placeholder="Username"/>
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
                        <input  value="Register" className="w-100 btn btn-warning btn-submit" type="submit"/>
                    </Link>
                </div>
            </form>
        </div>

    </div>
  </div>;
};

export default RegisterPage;
