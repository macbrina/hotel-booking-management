import { useMutation } from "@tanstack/react-query";
import { signup } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signupUser, isLoading: isSigning } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signup({ fullName, email, password }),
    onSuccess: (user) => {
      toast.success(
        `Account was created successfully. Please verify the account from the user's email address`
      );
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { signupUser, isSigning };
}
