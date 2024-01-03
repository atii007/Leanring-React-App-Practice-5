import * as Yup from "yup";

const validationSchemaSignup = Yup.object({
  username: Yup.string().required("UserName Required"),
  email: Yup.string().email("Invalid Email Format").required("Email Required"),
  password: Yup.string().required("Password Required"),
  message: Yup.string().required("We would love to hear about you"),
});

export default validationSchemaSignup;
