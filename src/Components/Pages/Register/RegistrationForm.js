import { Formik } from "formik";
import * as Yup from "yup";
import { Link, useSearchParams } from "react-router-dom";
import onSubmit from "./onSubmit";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

const RegisterationForm = () => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  const initialValues = {
    username: "",
    email: "",
    password: "",
    message: "",
  };
  const validationSchema = Yup.object({
    username: Yup.string().required("UserName Required"),
    email: Yup.string()
      .email("Invalid Email Format")
      .required("Email Required"),
    password: Yup.string().required("Password Required"),
    message: Yup.string().required("We would love to hear about you"),
  });

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
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(formik) => {
                  return (
                    <div className="custom-form contact-form">
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
                    </div>
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
