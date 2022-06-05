import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { BASE_URL, TOKEN_PATH } from "../../constants/api";
import FormError from "../common/FormError";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Heading from "../layout/Heading";
import Button from "react-bootstrap/Button";

const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [auth, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    console.log(data);
    console.log(url);

    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);
      setAuth(response.data);
      navigate("/admin");
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="login">
      <Heading>Log In</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        {loginError && <FormError>{loginError}</FormError>}
        <fieldset disabled={submitting}>
          <div>
            <input
              name="username"
              placeholder="Username"
              {...register("username")}
            />
            {errors.username && (
              <FormError>{errors.username.message}</FormError>
            )}
          </div>

          <div>
            <input
              name="password"
              placeholder="Password"
              {...register("password")}
              type="password"
            />
            {errors.password && (
              <FormError>{errors.password.message}</FormError>
            )}
          </div>
          <Button type="submit" variant="secondary">
            {submitting ? "Loggin in..." : "Login"}
          </Button>
        </fieldset>
      </form>
    </div>
  );
}
