import { Link } from "react-router-dom";
import { Credentials } from "../../store/actions/user";
import { Error } from "../../components/Error";
import * as Yup from "yup";
import "./Login.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

type loginFormValues = Credentials;

const Login = () => {
  const initialValues: loginFormValues = {
    username: "",
    password: "",
  };

  //validation for login/ sign up form
  const validationSchema = Yup.object({
    username: Yup.string().min(3).max(50).required("Required"),
    password: Yup.string().min(8).max(255).required("Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormValues>({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });

  const submit = (values: loginFormValues) => {
    console.log(values);
  };
  return (
    <div className="login-container">
      <h1>Login to your account</h1>
      <form className="login-form" onSubmit={handleSubmit(submit)}>
        {/* Username field */}
        <div className="login-field">
          <label htmlFor="username">Username</label>
          <input
            // {...} is called the spread operator in JavaScript
            {...register("username")}
            id="username"
            type="text"
            placeholder="Username"
          />
          {errors.username && <Error>{errors.username.message}</Error>}
        </div>
        {/* Password field */}
        <div className="login-field">
          <label htmlFor="password">Password</label>
          <input
            {...register("password")}
            id="password"
            type="password"
            placeholder="password"
          />
          {errors.password && <Error>{errors.password.message}</Error>}
        </div>

        {/* Forgot password */}
        <div>
          <Link className="forgot-password-link" to="/login/forgot">
            Forgot your password?
          </Link>
        </div>

        {/* submit button */}
        <button type="submit">Login</button>

        <p>Or</p>
        <div>
          <Link className="signup-link" to="/register">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Login;
