import { auth } from "./firebase-config";
import { signInWithPopup,GoogleAuthProvider} from "firebase/auth";

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const photoUrl = result.user.photoURL;
        const uid = result.user.uid;
        localStorage.setItem('user', JSON.stringify({name, email, photoUrl, uid}));
    })
    .catch((error) => {
        console.log(error)
    });
};

export const signOut = () => {
    auth.signOut();
    localStorage.clear();
}