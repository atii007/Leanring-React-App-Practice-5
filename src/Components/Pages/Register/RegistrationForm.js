import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import TextError from "../Contact/TextError";

const RegisterationForm = () => {
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

  const onSubmit = async (values, isSubmitProp) => {
    console.log(values);
    await fetch(
      "https://custom-hooks-ac50d-default-rtdb.firebaseio.com/users.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: values,
        }),
      }
    );
    isSubmitProp.resetForm();
    window.alert("Registration Successfull!");
  };

  return (
    <>
      <section className="section-padding section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <h3 className="mb-4 pb-2">Be A Part of It!</h3>
            </div>
            <div className="col-lg-6 col-12">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(formik) => {
                  return (
                    <Form className="custom-form contact-form">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="form-floating">
                            <Field
                              type="text"
                              name="username"
                              id="username"
                              className="form-control"
                              placeholder="Username"
                            />
                            <label htmlFor="username">Username</label>
                            <ErrorMessage
                              name="username"
                              component={TextError}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
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
                            <ErrorMessage
                              name="password"
                              component={TextError}
                            />
                          </div>
                          <div className="form-floating">
                            <Field
                              type="textarea"
                              className="form-control"
                              id="message"
                              name="message"
                              placeholder="Tell me about the project"
                            />
                            <label htmlFor="message">
                              Tell us about your Interests
                            </label>
                            <ErrorMessage
                              name="message"
                              component={TextError}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-12 ms-auto">
                          <button
                            type="submit"
                            disabled={!formik.isValid}
                            className="form-control"
                          >
                            Submit
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
