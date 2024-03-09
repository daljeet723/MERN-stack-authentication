import { Link } from "react-router-dom"
import "./Login.css"

const Login= () => {
  return (
    <div className="login-container">
      <h1>Login to your account</h1>
        <form className="login-form" >
        {/* Username field */}
        <div className="login-field">
            <label htmlFor="username">Username</label>
            <input id ='username' type='text' placeholder="Username"></input>
        </div>
        {/* Password field */}
        <div className="login-field">
            <label htmlFor="password">Password</label>
            <input id ='password' type='password' placeholder="password"></input>
        </div>

        {/* Forgot password */}
        <div>
            <Link to='/login/forgot'>Forgot your password</Link>
        </div>

        {/* submit button */}
        <button type="submit">Login</button>
       
        <p>Forgot your password</p>
        <Link to='/register'>Sign Up</Link>
        </form>
    </div>
  )
}
export default Login

