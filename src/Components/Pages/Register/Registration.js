import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import RegisterationForm from "./RegistrationForm";
import RegisterationHeader from "./RegistrationHeader";

const Registeration = () => {
  return (
    <>
      <Header />
      <RegisterationHeader />
      <RegisterationForm />
      <Footer />
    </>
  );
};

export default Registeration;

// export async function action({ request }) {
//   const searchParams = new URL(request.url).searchParams;
//   const mode = searchParams.get("mode");

//   if (mode !== "login" && mode !== "signup") {
//     throw json({ message: "Unsupported Mode" }, { status: 422 });
//   }

//   const data = await request.json();
//   const authData = {
//     userName: data.username,
//     email: data.email,
//     password: data.password,
//     message: data.message,
//   };

//   const response = await fetch("http://localhost:3000/register" + mode, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(authData),
//   });

//   if (response.status === 422 || response.status === 401) {
//     return response;
//   }

//   if (!response.ok) {
//     throw json({ message: "Could not authenticate user" }, { status: 500 });
//   }

//   return redirect("/");
// }
