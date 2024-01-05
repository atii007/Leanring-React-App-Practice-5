const onSubmitSignup = async (values, { resetForm, setFieldError }) => {
  const response = await fetch(
    "https://custom-hooks-ac50d-default-rtdb.firebaseio.com/users.json"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const users = await response.json();

  if (users && Object.keys(users).length > 0) {
    const isEmailExists = Object.values(users).some(
      (user) => user.User.email === values.email
    );

    if (isEmailExists) {
      setFieldError("email", "Email already exists");
      return;
    }
  }

  await fetch(
    "https://custom-hooks-ac50d-default-rtdb.firebaseio.com/users.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        User: values,
      }),
    }
  );

  resetForm();
  window.alert("Successfully Registered! Login Now to continue");
};

export default onSubmitSignup;
