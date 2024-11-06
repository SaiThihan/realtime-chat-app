import { ref } from "vue";

//firebase import
import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

const error = ref(null);

const login = async (email, password) => {
  error.value = null;

  try {
    const res = await signInWithEmailAndPassword(auth, email, password);

    if (!res) {
      throw new Error("Could not login");
    }
  } catch (err) {
    if (err.code === "auth/invalid-credential") {
      error.value = "Invalid Credentials";
    }
  }
};

const useLogin = () => {
  return { error, login };
};

export default useLogin;
