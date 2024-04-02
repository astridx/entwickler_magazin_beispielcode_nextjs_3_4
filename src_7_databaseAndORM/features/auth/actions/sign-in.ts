'use server';

const signIn = async (formData: FormData) => {
  const formDataRaw = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  // TODO: add validation yourself
  // https://www.robinwieruch.de/next-forms/

  // TODO: implement sign in logic
  // we will do this later
  console.log(formDataRaw);
};

export { signIn };
