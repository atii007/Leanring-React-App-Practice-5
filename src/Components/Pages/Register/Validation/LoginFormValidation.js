import * as Yup from "yup";

const validationSchemaLogin = Yup.object({
  email: Yup.string().email("Invalid Email Format").required("Email Required"),
  password: Yup.string().required("Password Required"),
});

export default validationSchemaLogin;
