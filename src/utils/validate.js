export const checkValidData = ( email, password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isNameValid = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/.test(name);

  if (!isEmailValid) return "Email ID is Not Valid";
  if (!isPasswordValid) return "Password is Not Valid";
  if (!isNameValid) return "Username Is Not Valid";

  return null;
};
