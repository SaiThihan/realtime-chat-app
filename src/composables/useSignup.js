import { ref } from "vue";

//firebase import
import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const error = ref(null);

const signup = async (username, email, password) => {
  error.value = null;

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    if (!res) {
      throw new Error("Could not complete signup");
    }

    await updateProfile(res.user, { displayName: username });
    error.value = null;
    
  } catch (err) {
    if (err.code === "auth/weak-password") {
      error.value = "Password should be at least 6 characters long.";
    } else if (err.code === "auth/email-already-in-use") {
      error.value = "Email is already in use.";
    } else if (err.code === "auth/invalid-email") {
      error.value = "Invalid email format.";
    } else {
      error.value = "An error occurred. Please try again.";
    }
  }
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;
