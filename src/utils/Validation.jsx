export const validationCheck = (email, password) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  // if (!isNameValidation) {
  //   return "Name is not valid";
  // } else if (!isEmailValid) {
  //   return "Email is not valid";
  // } else if (!isPasswordValid) {
  //   return "Password is not valid";
  // }
  // if (!isNameValidation) return "Name is not valid";
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};

export const validationCheckname = (name) =>{
  const isNameValidation= /^[\\p{L} .'-]+$/.test(name);

  if(!isNameValidation) return "Name is not valid";

  return null;
}