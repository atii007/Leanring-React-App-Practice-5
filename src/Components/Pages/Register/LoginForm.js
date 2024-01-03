import { ErrorMessage, Field } from "formik";
import TextError from "../Contact/TextError";

const LoginForm = () => {
  return (
    <>
      <div className="col-lg-12 col-12">
        <div className="form-floating">
          <Field
            type="email"
            name="email"
            id="email"
            pattern="[^ @]*@[^ @]*"
            className="form-control"
            placeholder="Email address"
          />
          <label htmlFor="email">Email address</label>
          <ErrorMessage name="email" component={TextError} />
        </div>
      </div>
      <div className="col-lg-12 col-12">
        <div className="form-floating">
          <Field
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder="Password"
          />
          <label htmlFor="subject">Password</label>
          <ErrorMessage name="password" component={TextError} />
        </div>
      </div>
    </>
  );
};

export default LoginForm;
