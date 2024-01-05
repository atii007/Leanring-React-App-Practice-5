const onSubmitLogin = async (values, { resetForm, setFieldError }) => {
  const response = await fetch(
    "https://custom-hooks-ac50d-default-rtdb.firebaseio.com/users.json"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const users = await response.json();

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
      setFieldError("password", "Invalid Credentials");
    }

    if (EmailExists && passwordExists) {
      const token = generateToken();

      localStorage.setItem("token", token);

      resetForm();
      window.alert("Login Successful!");

      window.location.replace("/");
    }
  }
};

const generateToken = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

export default onSubmitLogin;
