import { Formik, Form } from "formik";

import { Link, useSearchParams } from "react-router-dom";

import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

import validationSchemaSignup from "./Validation/SignupFormValidation";
import validationSchemaLogin from "./Validation/LoginFormValidation";
import onSubmitLogin from "./FormSubmission/LoginFormSubmission";
import onSubmitSignup from "./FormSubmission/SignupFormSubmission";

const RegisterationForm = () => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  const initialValuesSignup = {
    username: "",
    email: "",
    password: "",
    message: "",
  };
  const initialValuesLogin = {
    email: "",
    password: "",
  };

  return (
    <>
      <section className="section-padding section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <h3 className="mb-4 pb-2">
                {isLogin ? "Log in!" : "Register Yourself !"}
              </h3>
            </div>
            <div className="col-lg-6 col-12">
              <Formik
                initialValues={
                  isLogin ? initialValuesLogin : initialValuesSignup
                }
                validationSchema={
                  isLogin ? validationSchemaLogin : validationSchemaSignup
                }
                onSubmit={isLogin ? onSubmitLogin : onSubmitSignup}
              >
                {(formik) => {
                  return (
                    <Form className="custom-form contact-form">
                      <div className="row">
                        {isLogin ? <LoginForm /> : <SignupForm />}

                        <div className="col-lg-6 col-md-6 col-12">
                          <Link
                            to={`?mode=${isLogin ? "signup" : "login"}`}
                            className="form-control"
                          >
                            {isLogin ? "Signup" : "Login"}
                          </Link>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <button
                            type="submit"
                            disabled={!formik.isValid}
                            className="form-control"
                          >
                            Continue
                            <i
                              className="bi bi-arrow-right-circle"
                              style={{ marginLeft: "10px" }}
                            ></i>
                          </button>
                        </div>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterationForm;
