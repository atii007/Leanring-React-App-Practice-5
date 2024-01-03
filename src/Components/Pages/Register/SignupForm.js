import { ErrorMessage, Field } from "formik";
import TextError from "../Contact/TextError";

const SignupForm = () => {
  return (
    <>
      <div className="col-lg-12 col-12">
        <div className="form-floating">
          <Field
            type="text"
            name="username"
            id="username"
            className="form-control"
            placeholder="Username"
          />
          <label htmlFor="username">Username</label>
          <ErrorMessage name="username" component={TextError} />
        </div>
      </div>
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
        <div className="form-floating">
          <Field
            type="textarea"
            className="form-control"
            id="message"
            name="message"
            placeholder="Tell me about the project"
          />
          <label htmlFor="message">Tell us about your Interests</label>
          <ErrorMessage name="message" component={TextError} />
        </div>
      </div>
    </>
  );
};

export default SignupForm;
