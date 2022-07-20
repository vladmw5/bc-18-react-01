import { createAsyncThunk } from "@reduxjs/toolkit";
import { signIn, auth, provider } from "../../firebase/firebase-login";

const { signInWithPopup, GoogleAuthProvider } = signIn;
export const authGoogle = createAsyncThunk("authLogin", async () => {
  try {
    const user = await signInWithPopup(auth, provider);
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(user);
    const token = credential.accessToken;
    // The signed-in user info.
    const person = user.user;
    return person;
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  }
});
