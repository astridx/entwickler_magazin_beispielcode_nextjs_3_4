'use server';

const signUp = async (formData: FormData) => {
  const formDataRaw = {
    firstName: formData.get('firstName') as string,
    lastName: formData.get('lastName') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    confirmPassword: formData.get('confirmPassword') as string,
  };

  if (formDataRaw.password !== formDataRaw.confirmPassword) {
    throw new Error('Passwords do not match');
  }

  // TODO: add validation yourself
  // https://www.robinwieruch.de/next-forms/

  // TODO: implement sign up logic
  // we will do this later
  console.log(formDataRaw);
};

export { signUp };
