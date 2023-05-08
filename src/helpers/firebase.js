import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyABJAFYoW3NEHthmy0naFTcDxnwFIoh6Jc',
  authDomain: 'seddit-aredditclone.firebaseapp.com',
  projectId: 'seddit-aredditclone',
  storageBucket: 'seddit-aredditclone.appspot.com',
  messagingSenderId: '365858772603',
  appId: '1:365858772603:web:75c60072d5ea2be51334de',
  measurementId: 'G-QV28X88XY6',
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const signInWithGoogle = () => {
  signInWithPopup(auth, provider);
};

const signInRegular = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const { user } = userCredential;
      console.log(`${user} sign in successful!`);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(
        `sign in failed for some reason. ${errorMessage}. ${errorCode}`
      );
    });
};

const createUser = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const { user } = userCredential;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(
        `sign in failed for some reason. ${errorMessage}. ${errorCode}`
      );
    });
};

const signOutCurrentUser = () => {
  signOut(auth)
    .then(() => {
      console.log('sign out successful');
    })
    .catch((error) => {
      console.log(`something weird happened. ${error}`);
    });
};

// Returns an user object that is used to provide props to app component to provide user data to the application
const getCurrentSignedInUser = () => {
  const user = auth.currentUser;
  if (user) {
    const { displayName, email, photoURL } = user;
    return {
      name: displayName,
      emailaddress: email,
      profilepic: photoURL,
    };
  }
  console.log(`user is currently signed out`);
};

const updateUser = async (username) => {
  await updateProfile(auth.currentUser, {
    displayName: username,
  })
    .then(() => {
      console.log(`profile updated succesfully`);
    })
    .catch((error) => {
      console.log(`something failed to update ${error}`);
    });
};

export {
  signInWithGoogle,
  signOutCurrentUser,
  getCurrentSignedInUser,
  signInRegular,
  createUser,
  updateUser,
  auth,
  app,
};
