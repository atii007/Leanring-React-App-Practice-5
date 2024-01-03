const onSubmitLogin = async (values, { resetForm, setFieldError }) => {
  console.log(values);

  const response = await fetch(
    "https://custom-hooks-ac50d-default-rtdb.firebaseio.com/users.json"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const users = await response.json();
  console.log("users data from database", users);
  const token = users.token;
  console.log("token after user", token);

  if (users && Object.keys(users).length > 0) {
    const EmailExists = Object.values(users).some(
      (user) => user.User.email === values.email
    );
    const passwordExists = Object.values(users).some(
      (user) => user.User.password === values.password
    );

    if (!EmailExists) {
      setFieldError("email", "Email not registered");
    }
    if (!passwordExists) {
      setFieldError("password", "Incorrect Password");
    }

    if (EmailExists && passwordExists) {
      localStorage.setItem("token", token);
      console.log("token after local storage", token);

      resetForm();
      window.alert("Login Successful!");
    }
  }
};

export default onSubmitLogin;
